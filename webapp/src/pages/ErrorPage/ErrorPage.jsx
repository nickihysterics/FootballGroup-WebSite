import { AlertTriangle, ArrowLeft, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Button from "@/shared/ui/Button/Button.jsx";

export default function ErrorPage({ type = "generic" }) {
  const location = useLocation();
  const state = location.state || {};

  const isNotFound = type === "not-found";
  const title =
    state.title ||
    (isNotFound ? "Страница не найдена" : "Произошла ошибка");
  const message =
    state.message ||
    (isNotFound
      ? "Такой страницы не существует или адрес был введён неправильно."
      : "Не удалось отобразить страницу. Попробуйте обновить её или вернуться на главную.");

  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-[36px] border border-white/80 bg-white/88 p-8 shadow-[0_30px_80px_rgba(8,31,61,0.12)] backdrop-blur">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
          <AlertTriangle className="h-7 w-7" strokeWidth={1.8} />
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-700">
            {isNotFound ? "Not Found" : "Application Error"}
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-slate-950">{title}</h1>
          <p className="max-w-xl text-sm leading-7 text-slate-600">{message}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button as={Link} to="/" variant="primary" leftIcon={Home}>
            На главную
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