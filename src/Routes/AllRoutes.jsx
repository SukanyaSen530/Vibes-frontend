import { Routes, Route } from "react-router-dom";

import PreventedRoutes from "./PreventedRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

import {
  SignIn,
  SignUp,
  ForgetPassword,
  ResetPassword,
  Home,
  Explore,
  Feed,
  People,
  Profile,
  UserLiked,
  UserPosts,
  UserSaved,
  SinglePost,
} from "../pages";
import { ErrorComponent } from "../components";

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
        path="signup"
        element={
          <PreventedRoutes>
            <SignUp />
          </PreventedRoutes>
        }
      />
      <Route
        path="forgotpassword"
        element={
          <PreventedRoutes>
            <ForgetPassword />
          </PreventedRoutes>
        }
      />
      <Route
        path="resetpassword/:token"
        element={
          <PreventedRoutes>
            <ResetPassword />
          </PreventedRoutes>
        }
      />

      <Route
        path="home"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      >
        <Route index element={<Feed />} />
        <Route path="explore" element={<Explore />} />
        <Route path="people" element={<People />} />

        <Route path="post/:postId" element={<SinglePost />} />

        <Route path="profile/:userId" element={<Profile />}>
          <Route index element={<UserPosts />} />
          <Route path="saved" element={<UserSaved />} />
          <Route path="liked" element={<UserLiked />} />

          <Route path="*" element={<ErrorComponent />} />
        </Route>

        <Route path="*" element={<ErrorComponent />} />
      </Route>
      <Route path="*" element={<ErrorComponent />} />
    </Routes>
  );
};

export default AllRoutes;
