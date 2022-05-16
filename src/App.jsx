import { useEffect } from "react";
import AllRoutes from "./Routes/AllRoutes";

import "./App.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRefreshTokenQuery } from "./redux/services/authApi";
import { FullLoader } from "./components";

const App = () => {
  const { isLoading: authLoading, isError: isAuthError } =
    useRefreshTokenQuery();

  useEffect(() => {
    if (isAuthError) console.log("Log in");
  }, [isAuthError]);

  return (
    <div className="App">
      {authLoading ? <FullLoader /> : null}

      <AllRoutes />
      <ToastContainer
        position="top-left"
        autoClose={1200}
        hideProgressBar
        closeOnClick
        theme="colored"
      />
    </div>
  );
};

export default App;
