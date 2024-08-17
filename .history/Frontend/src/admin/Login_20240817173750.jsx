import { Button, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import {} from "react";

const Login = () => {
  const [login, setLogin] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
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
    });
  };

  return (
    <div>
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
        <Button></Button>
        <Button colorScheme="teal" size="sm" onClick={handleLogin}>
          Button
        </Button>
      </Stack>
    </div>
  );
};

export default Login;
