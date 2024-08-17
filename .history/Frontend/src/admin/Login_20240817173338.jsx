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

  return (
    <div>
      <Stack spacing={3}>
        <Input placeholder="Name" size="sm" onChange={handleChange} />
        <Input placeholder="Username" size="sm" onChange={handleChange} />
        <Input placeholder="Password" size="sm" onChange={handleChange} />
        <Button colorScheme="teal" size="sm" onClick={handle}>
          Button
        </Button>
      </Stack>
    </div>
  );
};

export default Login;
