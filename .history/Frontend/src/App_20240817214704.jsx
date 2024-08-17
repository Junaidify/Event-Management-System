import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import EventCreate from "./admin/EventCreate";
import Login from "./admin/Login";
import UserDashboard from "./user/userDashboard";
import FeedbackRating from "./admin/FeedbackRating";
import Reschedule from "./admin/Reschedule";
import RemoveMember from "./admin/RemoveMember";

function App() {
  const [isAdmin, setAdmin] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuth") === "true";
    const admin = localStorage.getItem("isAdmin") === "true";
    setIsAuth(auth);
    setAdmin(admin);
  }, []);

  const handleLogin = (authStatus, adminStatus) => {
    setIsAuth(authStatus);
    setAdmin(adminStatus);
    localStorage.setItem("isAuth", authStatus);
    localStorage.setItem("isAdmin", adminStatus);
  };

  const handleLogout = () => {
    setIsAuth(false);
    setAdmin(false);
    localStorage.removeItem("isAuth");
    localStorage.removeItem("isAdmin");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Login handleLogin={handleLogin} />}
      />
      {isAuth && (
        <>
          <Route path="/events" element={<UserDashboard />} />
          <Route path="/feedback/:id" element={<FeedbackRating />} />
          <Route path="/reschedule/:id" element={<Reschedule />} />
          <Route path="/remove/:id" element={<RemoveMember />} />
        </>
      )}
      {isAdmin && <Route path="/admin" element={<EventCreate />} />}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
