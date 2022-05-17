import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/authSlice";

const PreventedRoutes = ({ children }) => {
  const { token } = useSelector(selectAuth);

  const location = useLocation();
  const pathName = location?.state?.from?.pathname || "/home";

  if (token) {
    return <Navigate to={pathName} state={{ from: location }} replace />;
  }

  return children;
};

export default PreventedRoutes;
