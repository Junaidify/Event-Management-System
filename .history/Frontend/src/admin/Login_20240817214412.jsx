import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = ({ setIsAuth, setAdmin }) => {
  const [login, setLogin] = useState({
    name: "",
    username: "",
    password: "",
    role: "user",
  });
  const { handleLogin, setLogin: updateLogin, error } = useLogin({ setIsAuth, setAdmin });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to ${value}`); // Debugging
    updateLogin({ ...login, [name]: value });
  };

  // Toggle user role
  const handleRoleToggle = () => {
    const newRole = login.role === "user" ? "admin" : "user";
    console.log(`Switching role to ${newRole}`); // Debugging
    setLogin({ ...login, role: newRole });
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
          type="password"
          size="sm"
          onChange={handleChange}
        />
        <Button onClick={handleRoleToggle}>
          {login.role === "user" ? "Switch to Admin" : "Switch to User"}
        </Button>
        <Button colorScheme="teal" size="sm" onClick={handleLogin}>
          Login
        </Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Stack>
    </div>
  );
};

export default Login;
