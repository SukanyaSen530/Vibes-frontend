import AllRoutes from "./Routes/AllRoutes";

import "./App.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
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
