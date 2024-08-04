import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/providers/theme-provider";
import App from "./app";
import "./index.css";
import { Navigation } from "./components/site/navigation";

const el = document.getElementById("root");
if (el) {
  const root = createRoot(el);
  root.render(
    <React.StrictMode>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Navigation />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
} else {
  throw new Error("Could not find root element");
}
