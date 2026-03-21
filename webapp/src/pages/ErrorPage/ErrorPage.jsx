import { useEffect } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Home,
  RefreshCw,
  SearchX,
  ServerCrash,
  ShieldAlert,
  WifiOff,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Button from "@/shared/ui/Button/Button.jsx";

function resolveErrorConfig(type, state) {
  const rawDetail = String(
    state?.detail || state?.message || state?.error || ""
  ).trim();

  const rawText = rawDetail.toLowerCase();

  const inferredType =
    type !== "generic"
      ? type
      : rawText.includes("failed to fetch") ||
        rawText.includes("networkerror") ||
        rawText.includes("load failed") ||
        rawText.includes("network request failed")
      ? "network"
      : rawText.includes("403") || rawText.includes("forbidden")
      ? "forbidden"
      : rawText.includes("404") || rawText.includes("not found")
      ? "not-found"
      : rawText.includes("500") || rawText.includes("internal server error")
      ? "server"
      : "generic";

  const configs = {
    "not-found": {
      kind: "not-found",
      icon: SearchX,
      iconWrapClass: "bg-slate-100 text-slate-700",
      badge: "Страница не найдена",
      title: "Не удалось найти страницу",
      message:
        "Возможно, ссылка устарела или адрес был введён неправильно.",
      hint: "Проверьте адрес страницы или вернитесь на главную.",
    },
    network: {
      kind: "network",
      icon: WifiOff,
      iconWrapClass: "bg-sky-100 text-sky-700",
      badge: "Проблема с загрузкой",
      title: "Не удалось открыть раздел",
      message:
        "Мы не смогли загрузить данные страницы. Обычно это временная проблема с интернетом или соединением с сервером.",
      hint: "Попробуйте обновить страницу или зайти ещё раз чуть позже.",
    },
    forbidden: {
      kind: "forbidden",
      icon: ShieldAlert,
      iconWrapClass: "bg-amber-100 text-amber-700",
      badge: "Доступ ограничен",
      title: "Этот раздел недоступен",
      message:
        "Похоже, у вашей учётной записи нет доступа к этой странице.",
      hint: "Вернитесь назад или откройте другой раздел.",
    },
    server: {
      kind: "server",
      icon: ServerCrash,
      iconWrapClass: "bg-rose-100 text-rose-700",
      badge: "Временная ошибка",
      title: "Страница временно недоступна",
      message:
        "На сервере произошёл сбой. Обычно такая ошибка проходит через некоторое время.",
      hint: "Обновите страницу и попробуйте снова через пару минут.",
    },
    generic: {
      kind: "generic",
      icon: AlertTriangle,
      iconWrapClass: "bg-slate-100 text-slate-700",
      badge: "Что-то пошло не так",
      title: "Не удалось открыть страницу",
      message:
        "Во время загрузки произошла ошибка. Попробуйте повторить действие ещё раз.",
      hint: "Обновите страницу или вернитесь назад.",
    },
  };

  const config = configs[inferredType];

  return {
    ...config,
    title: state?.title || config.title,
    message: state?.userMessage || config.message,
    detail: rawDetail,
  };
}

export default function ErrorPage({ type = "generic" }) {
  const location = useLocation();
  const state = location.state || {};
  const error = resolveErrorConfig(type, state);
  const Icon = error.icon;

  useEffect(() => {
    console.groupCollapsed(
      `[ErrorPage] ${error.kind} • ${location.pathname || "/"}`
    );
    console.error("Path:", location.pathname || "/");
    console.error("Type prop:", type);
    console.error("Location state:", state);
    console.error("Resolved error:", error);
    console.groupEnd();
  }, [error, location.pathname, state, type]);

  return (
    <section className="flex min-h-[78vh] items-center justify-center px-4 py-8 sm:px-6">
      <div className="w-full max-w-[760px] rounded-[36px] border border-[#dbe5f0] bg-white px-6 py-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:px-8 sm:py-8">
        <div className="flex items-center gap-3">
          <div
            className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] ${error.iconWrapClass}`}
          >
            <Icon className="h-7 w-7" strokeWidth={1.9} />
          </div>

          <span className="inline-flex min-h-9 items-center rounded-full border border-[#d9e3ee] bg-[#f8fafc] px-4 text-[12px] font-semibold tracking-[0.08em] text-slate-500">
            {error.badge}
          </span>
        </div>

        <h1 className="mt-8 max-w-[12ch] text-[46px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#0b132b] sm:text-[58px]">
          {error.title}
        </h1>

        <p className="mt-5 max-w-[620px] text-[18px] leading-9 text-slate-600">
          {error.message}
        </p>

        <div className="mt-7 rounded-[22px] bg-[#f5f8fb] px-5 py-4 text-[15px] leading-7 text-slate-600">
          {error.hint}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button as={Link} to="/" variant="primary" leftIcon={Home}>
            На главную
          </Button>

          <Button
            variant="secondary"
            leftIcon={RefreshCw}
            onClick={() => window.location.reload()}
          >
            Обновить страницу
          </Button>

          <Button
            variant="ghost"
            leftIcon={ArrowLeft}
            onClick={() => window.history.back()}
          >
            Назад
          </Button>
        </div>
      </div>
    </section>
  );
}