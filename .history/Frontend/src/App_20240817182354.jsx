import "./App.css";
import EventCreate from "./admin/EventCreate";
import Login from "./admin/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/admin/" element={<Login />}></Route>
        <Route path="/admin/*" element={<EventCreate />}></Route>
        <Route path="/events" element={<User} />

      </Routes>
    </>
  );
}

export default App;
