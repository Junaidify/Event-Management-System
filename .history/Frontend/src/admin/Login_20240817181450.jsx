import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useLogin } from "../hooks/login";

const Login = () => {
  const [role, setRole] = useState(true);
  const { handleLogin, setLogin, login } = useLogin;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });

    role
      ? setLogin({ ...login, role: "user" })
      : setLogin({ ...login, role: "admin" });
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
