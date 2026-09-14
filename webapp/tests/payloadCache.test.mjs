import assert from "node:assert/strict";
import test from "node:test";
import { loadPagePayload, primePayloadCache, readCachedPayload } from "../src/features/page-data/payloadCache.js";
import { fetchJson } from "../src/shared/lib/fetchJson.js";

test("cache expires and can be refreshed", () => {
  const now = Date.now;
  try {
    Date.now = () => 1000;
    const route = {apiPath: "/api/expiry/"};
    primePayloadCache(route, {version: 1});
    assert.deepEqual(readCachedPayload(route), {version: 1});
    Date.now = () => 61000;
    assert.equal(readCachedPayload(route), null);
  } finally { Date.now = now; }
});

test("shared fetch survives cancellation of one consumer", async () => {
  const original = globalThis.fetch;
  let resolve;
  let calls = 0;
  try {
    globalThis.fetch = async (_url, options) => {
      calls++;
      assert.equal(options.signal.aborted, false);
      await new Promise(r => { resolve = r; });
      assert.equal(options.signal.aborted, false);
      return {ok: true, json: async () => ({players: []})};
    };
    const controller = new AbortController();
    const route = {apiPath: "/api/shared/"};
    const one = loadPagePayload(route, {signal: controller.signal});
    const two = loadPagePayload(route);
    controller.abort();
    resolve();
    assert.deepEqual(await one, await two);
    assert.equal(calls, 1);
  } finally { globalThis.fetch = original; }
});

test("failed requests are retryable", async () => {
  const original = globalThis.fetch;
  try {
    const route = {apiPath: "/api/retry/"};
    globalThis.fetch = async () => ({ok: false, status: 503});
    await assert.rejects(loadPagePayload(route), /503/);
    globalThis.fetch = async () => ({ok: true, json: async () => ({ok: true})});
    assert.deepEqual(await loadPagePayload(route), {ok: true});
  } finally { globalThis.fetch = original; }
});

test("custom headers preserve JSON Accept", async () => {
  const original = globalThis.fetch;
  try {
    globalThis.fetch = async (_url, options) => {
      assert.equal(options.headers.Accept, "application/json");
      assert.equal(options.headers["X-Example"], "yes");
      return {ok: true, json: async () => ({})};
    };
    await fetchJson("/api/test/", {headers: {"X-Example": "yes"}});
  } finally {globalThis.fetch = original;}
});
