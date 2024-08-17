import { Button, Input, Stack } from "@chakra-ui/react";
import {} from "react";

const Login = () => {
  return (
    <div>
      <Stack spacing={3}>
        <Input placeholder="Name" size="sm"  />
        <Input placeholder="Username" size="sm" />
        <Input placeholder="Password" size="sm" />
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
      </Stack>
    </div>
  );
};

export default Login;
