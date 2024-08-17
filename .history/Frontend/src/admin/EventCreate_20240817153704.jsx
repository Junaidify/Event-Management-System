import {} from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const EventCreate = () => {
  return (
    <div>
      <FormControl>
        
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        
      </FormControl>
    </div>
  );
};

export default EventCreate;
