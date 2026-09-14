import React from "react";
import ReactDOM from "react-dom/client";

import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import App from "./app";
import "./styles/global.css";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>,
);