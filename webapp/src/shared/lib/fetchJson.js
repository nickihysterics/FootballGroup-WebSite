export async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    credentials: "same-origin",
    headers: { Accept: "application/json", ...(options.headers || {}) },
    signal: options.signal || AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  return response.json();
}
