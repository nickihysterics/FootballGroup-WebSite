import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app.jsx";
import "../app/globals.css";

const rootElement = document.getElementById("react-app-root");
const payloadElement = document.getElementById("react-page-data");

if (rootElement && payloadElement?.textContent) {
  const payload = JSON.parse(payloadElement.textContent);
  const page = rootElement.dataset.page || "home";
  const pathname = rootElement.dataset.path || window.location.pathname;

  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App initialPage={page} initialPathname={pathname} initialPayload={payload} />
      </BrowserRouter>
    </React.StrictMode>,
  );
}
