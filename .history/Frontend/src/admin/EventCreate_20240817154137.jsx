import {} from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const EventCreate = () => {
  return (
    <div>
      <FormControl>
        <Box>
          <FormLabel>Name</FormLabel> <Input type="texxt" />
        </Box>
        <Box>
          <FormLabel>Date</FormLabel> <Input type="date" />
        </Box>
        <Box>
          <FormLabel>Time</FormLabel> <Input type="time" />
        </Box>
        <Box>
          <FormLabel>Location</FormLabel> <Input type="text" />
        </Box>
        <Box>
          <FormLabel>Descrition</FormLabel> <Input type="text" />
        </Box>
      </FormControl>
    </div>
  );
};

export default EventCreate;
