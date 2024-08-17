import "./App.css";
import EventCreate from "./admin/EventCreate";
import Login from "./admin/Login";
import { Routes, Route } from "react-router-dom";
import UserDashboard from "./user/userDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/" element={<Login />} />
        <Route path="/admin/*" element={<EventCreate />} />
        <Route path="/events" element={<UserDashboard />} />
        
      </Routes>
    </>
  );
}

export default App;
