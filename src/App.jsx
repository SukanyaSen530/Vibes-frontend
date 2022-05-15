import { useEffect } from "react";
import AllRoutes from "./Routes/AllRoutes";

import "./App.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRefreshTokenQuery } from "./redux/services/authApi";

const App = () => {
  const { data, isLoading, isError, isSuccess } = useRefreshTokenQuery();

  console.log("data");

  return (
    <div className="App">
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
