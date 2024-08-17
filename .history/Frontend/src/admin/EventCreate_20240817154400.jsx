import {} from "react";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

const EventCreate = () => {

  const handleChange = () => {
    const 
  }

  return (
    <div>
      <FormControl>
        <Box>
          <FormLabel>Name</FormLabel> <Input type="texxt" name="name" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Date</FormLabel> <Input type="date" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Time</FormLabel> <Input type="time" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Location</FormLabel> <Input type="text" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Descrition</FormLabel> <Input type="text" onChange={handleChange} />
        </Box>
      </FormControl>
    </div>
  );
};

export default EventCreate;
