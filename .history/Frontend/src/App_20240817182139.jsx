import "./App.css";
import Login from "./admin/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/admin/*" element={< />}></Route>
      </Routes>
    </>
  );
}

export default App;
