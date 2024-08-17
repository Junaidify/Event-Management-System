import "./App.css";
import EventCreate from "./admin/EventCreate";
import Login from "./admin/Login";
import { Routes, Route } from "react-router-dom";
import UserDashboard from "./user/userDashboard";
import FeedbackRating from "./admin/FeedbackRating";
import Reschedule from "./admin/Reschedule";
import RemoveMember from "./admin/RemoveMember";
import { useState } from "react";

function App() {
  const [role, setRole] = useState(true);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login role={{role, setRole}} />} />
        <Route path="/admin" element={<EventCreate />} />
        <Route path="/events" element={<UserDashboard />} />
        <Route path="/feedback/:id" element={<FeedbackRating />} />
        <Route path="/reschedule/:id" element={<Reschedule />} />
        <Route path="/remove/:id" element={<RemoveMember />} />
      </Routes>
    </>
  );
}

export default App;
