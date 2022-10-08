import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}
