import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import UserPosts from "./pages/UserPosts";
import Users from "./pages/Users";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/users"} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id/posts" element={<UserPosts />} />
        <Route path="/:not-found" element={<NotFound />} />
        <Route path="/:error" element={<Navigate to={"/not-found"} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
