import { Button, Input, Stack } from "@chakra-ui/react";
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
    if(login.name.trim() === ""){
      alert("Name cannot be empty");
      return;
    }
  };

  return (
    <div>
      <Stack spacing={3}>
        <Input name="name" value={login.name} placeholder="Name" size="sm" onChange={handleChange} />
        <Input name="username" value={login.username} placeholder="Username" size="sm" onChange={handleChange} />
        <Input name="password" value={login.password} placeholder="Password" size="sm" onChange={handleChange} />
        <Button colorScheme="teal" size="sm" onClick={handleLogin}>
          Button
        </Button>
      </Stack>
    </div>
  );
};

export default Login;
