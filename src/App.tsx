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

function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/movie" element={<SingleMovie />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/users" element={<Users />} />
        <Route path="/movie-detail/:typeFilm/:id/*" element={<SingleMovie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
