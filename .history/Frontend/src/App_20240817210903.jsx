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
  const [isAdmin, setAdmin] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuth={{ setIsAuth, setAdmin }} />}
        />
        {isAdmin && <Route path="/admin" element={<EventCreate />} />}
        {if(isAuth && isAdmin){<Route path="/events" element={<UserDashboard />} />} else{
          <
        }
        <Route path="/feedback/:id" element={<FeedbackRating />} />
        <Route path="/reschedule/:id" element={<Reschedule />} />
        <Route path="/remove/:id" element={<RemoveMember />} />
      </Routes>
    </>
  );
}

export default App;
