import { Button, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    name: "",
    username: "",
    password: "",
    role: "user",
  });
  const [role, setRole] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });

    role
      ? setLogin({ ...login, role: "user" })
      : setLogin({ ...login, role: "admin" });
  };

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
      .post("http://localhost:3000/login", login)
      .then(() => {
        alert("Login successful");
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

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Stack spacing={3}>
        <Input
          name="name"
          value={login.name}
          placeholder="Name"
          size="sm"
          onChange={handleChange}
        />
        <Input
          name="username"
          value={login.username}
          placeholder="Username"
          size="sm"
          onChange={handleChange}
        />
        <Input
          name="password"
          value={login.password}
          placeholder="Password"
          size="sm"
          onChange={handleChange}
        />
        <Button onClick={() => setRole((prev) => !prev)}>
          {role ? "User" : "Admin"}
        </Button>
        <Button colorScheme="teal" size="sm" onClick={handleLogin}>
          Button
        </Button>
      </Stack>
    </div>
  );
};

export default Login;
