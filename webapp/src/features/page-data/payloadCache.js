import { fetchJson } from "../../shared/lib/fetchJson.js";

const payloadCache = new Map();
const inflightPayloads = new Map();
const CACHE_TTL = 60_000;
const getCacheKey = route => route?.apiPath || "";

export function readCachedPayload(route) {
  const key = getCacheKey(route);
  const entry = payloadCache.get(key);
  if (!entry) return null;
  if (Date.now() >= entry.expiresAt) {
    payloadCache.delete(key);
    return null;
  }
  return entry.payload;
}

export function primePayloadCache(route, payload) {
  const key = getCacheKey(route);
  if (key && payload) payloadCache.set(key, { payload, expiresAt: Date.now() + CACHE_TTL });
}

export async function loadPagePayload(route) {
  const key = getCacheKey(route);
  if (!key) throw new Error("Cannot load page payload without route.apiPath");
  const cached = readCachedPayload(route);
  if (cached) return cached;
  if (inflightPayloads.has(key)) return inflightPayloads.get(key);
  // Запрос общий: уход одной страницы не должен отменять запрос для другой.
  // Таймаут задаётся в fetchJson; подписчики сами игнорируют устаревший результат.
  const promise = fetchJson(key)
    .then(payload => { primePayloadCache(route, payload); return payload; })
    .finally(() => inflightPayloads.delete(key));
  inflightPayloads.set(key, promise);
  return promise;
}

export function prefetchPagePayload(route) {
  const key = getCacheKey(route);
  if (!key || readCachedPayload(route) || inflightPayloads.has(key)) return;
  loadPagePayload(route).catch(() => {});
}
