import { startTransition, useEffect, useMemo, useState } from "react";

import { getRouteByPage, getRouteByPathname, normalizePathname, PAGE_ROUTES } from "@/app/router/pageRoutes.js";
import { fetchJson } from "@/shared/lib/fetchJson.js";

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export default function usePagePayload({
  route,
  enabled = true,
  currentPathname,
  initialPage,
  initialPathname,
  initialPayload,
}) {
  const initialRoute = useMemo(() => {
    return getRouteByPage(initialPage) || getRouteByPathname(initialPathname) || PAGE_ROUTES[0];
  }, [initialPage, initialPathname]);

  const normalizedInitialPath = useMemo(() => {
    return normalizePathname(initialPathname);
  }, [initialPathname]);

  const [pageState, setPageState] = useState(() => ({
    pathname: normalizedInitialPath,
    route: initialRoute,
    payload: initialPayload,
    status: "ready",
    error: null,
  }));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentPathname]);

  useEffect(() => {
    if (!enabled || !route) {
      return;
    }

    const controller = new AbortController();
    const isInitialRoute =
      route.page === initialRoute.page && currentPathname === normalizedInitialPath;

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
        route,
        payload: null,
        status: "loading",
        error: null,
      });
    });

    Promise.all([
      fetchJson(route.apiPath, { signal: controller.signal }),
      wait(2000),
    ])
      .then(([payload]) => {
        if (controller.signal.aborted) {
          return;
        }

        startTransition(() => {
          setPageState({
            pathname: currentPathname,
            route,
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
            route,
            payload: null,
            status: "error",
            error,
          });
        });
      });

    return () => controller.abort();
  }, [
    currentPathname,
    enabled,
    initialPayload,
    initialRoute,
    normalizedInitialPath,
    route,
  ]);

  return pageState;
}