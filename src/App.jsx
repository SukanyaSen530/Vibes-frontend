import { useEffect } from "react";
import AllRoutes from "./Routes/AllRoutes";

import "./App.scss";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRefreshTokenQuery } from "./redux/services/authApi";
import { FullLoader } from "./components";

const App = () => {
  const { isLoading, isError, error } = useRefreshTokenQuery();

  useEffect(() => {
    if (isError) toast.info(error?.data?.message);
  }, [isError, error]);

  return (
    <div className="App">
      {isLoading ? <FullLoader /> : null}

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
