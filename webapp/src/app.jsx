import { AlertTriangle, LoaderCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { startTransition, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import HomePage from "../app/page.jsx";
import TeamPage from "../app/team/page.jsx";
import MatchesPage from "../app/matches/page.jsx";
import MediaPage from "../app/media/page.jsx";
import ContactsPage from "../app/contacts/page.jsx";
import SiteChrome from "../components/site-chrome.jsx";
import { cn } from "./lib/cn.js";
import { fetchPagePayload, getRouteByPage, getRouteByPathname, normalizePathname, PAGE_ROUTES } from "./lib/routes.js";

const PAGE_COMPONENTS = {
  home: HomePage,
  team: TeamPage,
  matches: MatchesPage,
  media: MediaPage,
  contacts: ContactsPage,
};

function RouteLoadingState({ route }) {
  return (
    <section className="mx-auto flex min-h-[45vh] w-full max-w-3xl items-center justify-center px-4 py-10">
      <div className="flex w-full max-w-xl flex-col gap-4 rounded-[32px] border border-sky-100/80 bg-white/85 p-8 text-slate-900 shadow-[0_24px_80px_rgba(8,31,61,0.12)] backdrop-blur">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <LoaderCircle className="h-6 w-6 animate-spin" strokeWidth={1.8} />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Route Transition</p>
          <h1 className="text-2xl font-semibold leading-tight text-slate-950">Загружаем раздел «{route.label}»</h1>
          <p className="max-w-lg text-sm leading-6 text-slate-600">
            Данные страницы подтягиваются через клубный API, после чего интерфейс обновится без полной перезагрузки документа.
          </p>
        </div>
      </div>
    </section>
  );
}

function RouteErrorState({ route, error }) {
  return (
    <section className="mx-auto flex min-h-[45vh] w-full max-w-3xl items-center justify-center px-4 py-10">
      <div className="flex w-full max-w-xl flex-col gap-4 rounded-[32px] border border-rose-100/90 bg-white/90 p-8 text-slate-900 shadow-[0_24px_80px_rgba(8,31,61,0.12)] backdrop-blur">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
          <AlertTriangle className="h-6 w-6" strokeWidth={1.8} />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-700">Route Error</p>
          <h1 className="text-2xl font-semibold leading-tight text-slate-950">Не удалось открыть раздел «{route.label}»</h1>
          <p className="max-w-lg text-sm leading-6 text-slate-600">
            {error?.message || "Клиентская навигация не смогла получить данные страницы."}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => window.location.assign(route.path)}
            className={cn(
              "inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800",
              "focus:outline-none focus:ring-2 focus:ring-slate-950/20",
            )}
          >
            Перезагрузить страницу
          </button>
          <button
            type="button"
            onClick={() => window.location.assign("/")}
            className={cn(
              "inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50",
              "focus:outline-none focus:ring-2 focus:ring-slate-950/10",
            )}
          >
            На главную
          </button>
        </div>
      </div>
    </section>
  );
}

export default function App({ initialPage, initialPathname, initialPayload }) {
  const location = useLocation();
  const initialRoute = getRouteByPage(initialPage) || getRouteByPathname(initialPathname) || PAGE_ROUTES[0];
  const currentPathname = normalizePathname(location.pathname);
  const currentRoute = getRouteByPathname(currentPathname) || initialRoute;
  const ActivePage = PAGE_COMPONENTS[currentRoute.page] || HomePage;
  const [pageState, setPageState] = useState(() => ({
    pathname: normalizePathname(initialPathname),
    route: initialRoute,
    payload: initialPayload,
    status: "ready",
    error: null,
  }));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentPathname]);

  useEffect(() => {
    const controller = new AbortController();
    const normalizedInitialPath = normalizePathname(initialPathname);
    const isInitialRoute = currentRoute.page === initialRoute.page && currentPathname === normalizedInitialPath;

    if (isInitialRoute) {
      startTransition(() => {
        setPageState({
          pathname: normalizedInitialPath,
          route: initialRoute,
          payload: initialPayload,
          status: "ready",
          error: null,
        });
      });
      return () => controller.abort();
    }

    startTransition(() => {
      setPageState({
        pathname: currentPathname,
        route: currentRoute,
        payload: null,
        status: "loading",
        error: null,
      });
    });

    fetchPagePayload(currentRoute, controller.signal)
      .then((payload) => {
        startTransition(() => {
          setPageState({
            pathname: currentPathname,
            route: currentRoute,
            payload,
            status: "ready",
            error: null,
          });
        });
      })
      .catch((error) => {
        if (controller.signal.aborted) {
          return;
        }

        startTransition(() => {
          setPageState({
            pathname: currentPathname,
            route: currentRoute,
            payload: null,
            status: "error",
            error,
          });
        });
      });

    return () => controller.abort();
  }, [currentPathname, currentRoute, initialPathname, initialPayload, initialRoute]);

  const activePayload = pageState.pathname === currentPathname ? pageState.payload : null;
  const chromeClub = activePayload?.club || initialPayload.club;

  return (
    <SiteChrome club={chromeClub}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentPathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {pageState.status === "error" ? (
            <RouteErrorState route={currentRoute} error={pageState.error} />
          ) : activePayload ? (
            <ActivePage data={activePayload} />
          ) : (
            <RouteLoadingState route={currentRoute} />
          )}
        </motion.div>
      </AnimatePresence>
    </SiteChrome>
  );
}
