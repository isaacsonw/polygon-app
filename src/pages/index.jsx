import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes";
import PAGES_URL from "./pageRoutes";
import Dashboard from "./Dashboard/index";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import NotFound from "./NotFound";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={PAGES_URL.LOGIN} element={<Login />} />
        <Route path={PAGES_URL.REGISTER} element={<Register />} />
        <Route path='/' element={<Navigate replace to={PAGES_URL.LOGIN} />} />
        <Route element={<PrivateRoutes />}>
          <Route path={PAGES_URL.DASHBOARD} element={<Dashboard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
