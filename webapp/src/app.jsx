import AppRouter from "@/app/router/AppRouter.jsx";

export default function App({ initialPage, initialPathname, initialPayload }) {
  return (
    <AppRouter
      initialPage={initialPage}
      initialPathname={initialPathname}
      initialPayload={initialPayload}
    />
  );
}