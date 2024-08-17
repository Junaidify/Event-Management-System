import "./App.css";
import EventCreate from "./admin/EventCreate";
import Login from "./admin/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <>

    <Routes>
      <Route path="/admin" element={<Login />}></Route>
    </Routes>

     
    </>
  );
}

export default App;
