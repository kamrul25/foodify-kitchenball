import React from "react";
import ReactDOM from "react-dom/client";
import MainOutlet from "./mianOutlet/MainOutlet";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <MainOutlet></MainOutlet>
    </RouterProvider>
  </React.StrictMode>
);
