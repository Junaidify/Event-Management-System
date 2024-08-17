import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = ({ setIsAuth, setAdmin }) => {
  const [login, setLogin] = useState({
    name: "",
    username: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (login.name.trim() === "") {
      alert("Name is required");
      return;
    }

    if (login.username.trim() === "") {
      alert("Username cannot be empty");
      return;
    }

    if (login.password.trim() === "") {
      alert("Password cannot be empty");
      return;
    }

    try {
      await axios.post("http://localhost:3000/authentication", login);
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("isAdmin", login.role === "");
      alert("Login successful");
      setIsAuth(true);
      setAdmin(login.role === "admin");
      navigate(login.role === "user" ? "/events" : "/admin");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please try again.");
    }
  };

  return { handleLogin, setLogin, login, error };
};
