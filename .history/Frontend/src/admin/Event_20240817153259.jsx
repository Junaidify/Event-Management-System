import {} from "react";
import { FormControl, FormLabel, Grid, GridItem } from "@chakra-ui/react";

const Event = () => {
  return (
    <div>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Event;
