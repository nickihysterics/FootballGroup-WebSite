const API_BASE = process.env.DJANGO_API_URL || "http://127.0.0.1:8000/api";

async function fetchApi(path) {
  const response = await fetch(`${API_BASE}${path}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request failed for ${path}: ${response.status}`);
  }

  return response.json();
}

export function getSiteData() {
  return fetchApi("/site/");
}

export function getHomeData() {
  return fetchApi("/home/");
}

export function getTeamData() {
  return fetchApi("/team/");
}

export function getMatchesData() {
  return fetchApi("/matches/");
}

export function getMediaData() {
  return fetchApi("/media/");
}

export function getContactsData() {
  return fetchApi("/contacts/");
}
