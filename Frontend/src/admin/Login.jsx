import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = ({ setIsAuth, setAdmin }) => {
  const [role, setRole] = useState("user");
  const { handleLogin, setLogin, login, error } = useLogin({
    setIsAuth,
    setAdmin,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleRoleToggle = () => {
    const newRole = role === "user" ? "admin" : "user";
    setRole(newRole);
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
          {role === "user" ? "Switch to Admin" : "Switch to User"}
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
