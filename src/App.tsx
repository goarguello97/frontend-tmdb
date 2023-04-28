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

function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/movie" element={<SingleMovie />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
