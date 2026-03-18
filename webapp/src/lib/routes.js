export const PAGE_ROUTES = [
  { page: "home", path: "/", apiPath: "/api/home/", label: "Главная" },
  { page: "team", path: "/team/", apiPath: "/api/team/", label: "Команда" },
  { page: "matches", path: "/matches/", apiPath: "/api/matches/", label: "Матчи" },
  { page: "media", path: "/media/", apiPath: "/api/media/", label: "Медиа" },
  { page: "contacts", path: "/contacts/", apiPath: "/api/contacts/", label: "Контакты" },
];

export function normalizePathname(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function getRouteByPage(page) {
  return PAGE_ROUTES.find((route) => route.page === page) || null;
}

export function getRouteByPathname(pathname) {
  const normalizedPath = normalizePathname(pathname);
  return PAGE_ROUTES.find((route) => route.path === normalizedPath) || null;
}

export async function fetchPagePayload(route, signal) {
  const response = await fetch(route.apiPath, {
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`API request failed for ${route.apiPath}: ${response.status}`);
  }

  return response.json();
}
