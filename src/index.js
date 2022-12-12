import React from "react";
import ReactDOM from "react-dom/client";

import PageRoutes from "./pages/index";
import "./tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <PageRoutes />
  </React.StrictMode>
);
