import { Routes, Route } from "react-router-dom";

import PreventedRoutes from "./PreventedRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

import { SignIn, SignUp, ForgetPassword, ResetPassword, Home } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Prevented Routes */}
      <Route
        path="/"
        element={
          <PreventedRoutes>
            <SignIn />
          </PreventedRoutes>
        }
      />
      <Route
        path="/signup"
        element={
          <PreventedRoutes>
            <SignUp />
          </PreventedRoutes>
        }
      />
      <Route
        path="/forgotpassword"
        element={
          <PreventedRoutes>
            <ForgetPassword />
          </PreventedRoutes>
        }
      />
      <Route
        path="/resetpassword/:token"
        element={
          <PreventedRoutes>
            <ResetPassword />
          </PreventedRoutes>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      >
        {/* <Route index path="feed" element={} />
        <Route path="explore" element={} />
        <Route path="people" element={} />
        <Route path="bookmarks" element={} />
        <Route path="profile/:userId" element={} /> */}
      </Route>
      <Route path="*" element={<h1>Invalid Page</h1>} />
    </Routes>
  );
};

export default AllRoutes;
