import {} from 'react';
import {Grid, GridItem} from '@chakra-ui/react'; 

const Event = () => {
  return (
    <div>
       <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
      
    </div>
  )
}

export default Event
