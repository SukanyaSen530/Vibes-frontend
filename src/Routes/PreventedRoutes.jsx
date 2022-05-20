import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/authSlice";

const PreventedRoutes = ({ children }) => {
  const { token } = useSelector(selectAuth);

  if (token) {
    return <Navigate to="home/feed" />;
  }

  return children;
};

export default PreventedRoutes;
