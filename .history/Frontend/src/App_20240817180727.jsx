import "./App.css";
import EventCreate from "./admin/EventCreate";
import Login from "./admin/Login";
import UserDashboard from "./user/userDashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <>

    <Routes>
      <Route path="/admin" element={<Login />}></Route>
    </Routes>

      <EventCreate />
      <UserDashboard />
      <Login />
    </>
  );
}

export default App;
