import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [login, setLogin] = useState({
    name: "",
    username: "",
    password: "",
    role: "user",
  });
  const navigate = useNavigate();

  const handleLogin = () => {
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

    axios
      .post("http://localhost:3000/authentication", login)
      .then(() => {
        alert("Login successful");
        role === 'user' ? navigate('/event') : navigate
      })
      .catch((err) => {
        console.log(err);
      });

    setLogin({
      name: "",
      username: "",
      password: "",
      role: "user",
    });
  };

  return { handleLogin, setLogin, login };
};
