import {} from "react";
import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const EventCreate = () => {
  return (
    <div>
      <FormControl>
        <Box> <FormLabel>Name</FormLabel> <Input type="texxt" /></Box>
        <Box> <FormLabel>Email address</FormLabel> <Input type="email" /></Box>
        <Box> <FormLabel>Email address</FormLabel> <Input type="email" /></Box>
        <Box> <FormLabel>Email address</FormLabel> <Input type="email" /></Box>
      </FormControl>
    </div>
  );
};

export default EventCreate;
