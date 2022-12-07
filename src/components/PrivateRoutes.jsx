import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import * as Helpers from "../helpers";
import PAGES_URL from "../pages/pageRoutes";
import { DashboardLayout } from "./DashboardLayout";

const PrivateRoutes = () => {
  const isLoggedIn = !!Helpers.token.get("user:token");
  const location = useLocation();

  return isLoggedIn ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ) : (
    <Navigate replace to={PAGES_URL.LOGIN} state={{ from: location }} />
  );
};

export default PrivateRoutes;
