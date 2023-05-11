import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/Nav/Nav";
import Users from "./pages/Users";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SingleMovie from "./pages/SingleMovie";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Error404 from "./pages/Error404";
import Horror from "./pages/Horror";
import Drama from "./pages/Drama";
import Comedy from "./pages/Comedy";
import PrivateRoute from "./routes/PrivateRoute";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";
import { persistLogin } from "./features/user/authSlice";

function App() {
  const dispatch = useAppDispatch();
  const { userLogged } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!userLogged) {
      dispatch(persistLogin());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLogged]);

  return (
    <Router>
      {userLogged ? <NavMenu /> : null}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/horror"
          element={
            <PrivateRoute>
              <Horror />
            </PrivateRoute>
          }
        />
        <Route
          path="/drama"
          element={
            <PrivateRoute>
              <Drama />
            </PrivateRoute>
          }
        />
        <Route
          path="/comedy"
          element={
            <PrivateRoute>
              <Comedy />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/movie-detail/:typeFilm/:id/*"
          element={
            <PrivateRoute>
              <SingleMovie />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile-edit"
          element={
            <PrivateRoute>
              <ProfileEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Error404 />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
