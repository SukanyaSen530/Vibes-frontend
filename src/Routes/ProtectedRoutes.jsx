import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/authSlice";

const ProtectedRoutes = ({ children }) => {
  const { token } = useSelector(selectAuth);

  let location = useLocation();

  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoutes;
