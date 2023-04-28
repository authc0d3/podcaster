import "@/common/icons/font-awesome";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/app/App";
import { PRODUCTION_MODE, checkRedirectionForGHPages } from "@/common/utils";

if (PRODUCTION_MODE) checkRedirectionForGHPages();

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
