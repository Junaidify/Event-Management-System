import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useLogin } from "../hooks/login";

const Login = () => {
  const [role, setRole] = useState(true); // true for 'user', false for 'admin'
  const { handleLogin, setLogin, login } = useLogin(); // Correctly call useLogin()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleRoleToggle = () => {
    setRole((prevRole) => !prevRole);
    setLogin({ ...login, role: !role ? "user" : "admin" }); 
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
        <Button onClick={handleRoleToggle}>
          {role ? "User" : "Admin"}
        </Button>
        <Button colorScheme="teal" size="sm" onClick={handleLogin}>
          Login
        </Button>
      </Stack>
    </div>
  );
};

export default Login;
