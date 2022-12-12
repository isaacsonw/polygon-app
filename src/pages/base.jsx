import React from "react";
import Dashboard from "./Dashboard";

import PAGES_URL from "./pageRoutes";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

const baseRoutes = [
  {
    component: <Dashboard />,
    path: PAGES_URL.DASHBOARD
  },
  {
    component: <Login />,
    path: PAGES_URL.LOGIN
  },
  {
    component: <Register />,
    path: PAGES_URL.SIGNUP
  }
];

export default baseRoutes;
