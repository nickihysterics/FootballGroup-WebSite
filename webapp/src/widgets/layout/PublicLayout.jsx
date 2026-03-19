import { Navigate, Outlet, useLocation } from "react-router-dom";

import { getRouteByPage, getRouteByPathname, normalizePathname, PAGE_ROUTES } from "@/app/router/pageRoutes.js";
import usePagePayload from "@/features/page-data/usePagePayload.js";
import SiteFooter from "@/widgets/layout/SiteFooter.jsx";
import SiteHeader from "@/widgets/layout/SiteHeader.jsx";
import RouteLoadingState from "@/widgets/states/RouteLoadingState.jsx";

const FALLBACK_CLUB = {
  name: "Газпром ФК",
  short_name: "Газпром",
  hero_badge: "Футбольный клуб",
  stadium: "Газпром Арена",
  city: "Санкт-Петербург",
  mission: "Официальная витрина клуба.",
  address: "",
  email: "",
  phone: "",
  links: {},
};

export default function PublicLayout({ initialPage, initialPathname, initialPayload }) {
  const location = useLocation();
  const currentPathname = normalizePathname(location.pathname);

  const currentRoute = getRouteByPathname(currentPathname);
  const initialRoute =
    getRouteByPage(initialPage) ||
    getRouteByPathname(initialPathname) ||
    PAGE_ROUTES[0];

  const isContentRoute = Boolean(currentRoute);

  const pageState = usePagePayload({
    route: currentRoute,
    enabled: isContentRoute,
    currentPathname,
    initialPage,
    initialPathname,
    initialPayload,
  });

  const isResolvedForCurrentPath =
    isContentRoute && pageState.pathname === currentPathname;

  const activePayload =
    isResolvedForCurrentPath && pageState.status === "ready"
      ? pageState.payload
      : null;

  const chromeClub =
    activePayload?.club ||
    initialPayload?.club ||
    FALLBACK_CLUB;

  const club = {
    ...FALLBACK_CLUB,
    ...(chromeClub || {}),
    links: {
      ...FALLBACK_CLUB.links,
      ...(chromeClub?.links || {}),
    },
  };

  if (isContentRoute && isResolvedForCurrentPath && pageState.status === "error") {
    return (
      <Navigate
        to="/error/"
        replace
        state={{
          type: "runtime",
          title: `Не удалось открыть раздел «${currentRoute.label}»`,
          message:
            pageState.error?.message || "Клиентская навигация не смогла получить данные страницы.",
        }}
      />
    );
  }

  const shouldShowLoading =
    isContentRoute &&
    (!isResolvedForCurrentPath || pageState.status === "loading" || !activePayload);

  return (
    <div className="site-shell">
      <div className="site-shell__mesh" />
      <div className="site-shell__noise" />
      <div className="site-shell__glow site-shell__glow--left" />
      <div className="site-shell__glow site-shell__glow--right" />

      <SiteHeader club={club} />

      <main className="page-shell">
        {isContentRoute ? (
          shouldShowLoading ? (
            <RouteLoadingState route={currentRoute} />
          ) : (
            <Outlet
              context={{
                data: activePayload,
                club,
                route: currentRoute,
              }}
            />
          )
        ) : (
          <Outlet
            context={{
              data: null,
              club,
              route: null,
            }}
          />
        )}
      </main>

      <SiteFooter club={club} />
    </div>
  );
}