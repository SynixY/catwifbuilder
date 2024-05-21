import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BuildPage from "./BuildPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./css/normalize.css";
import "./css/webflow.css";
import "./css/dogwifbuilder.webflow.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "build",
    element: <BuildPage />,
  },
]);

// Get a reference to the root element
const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
