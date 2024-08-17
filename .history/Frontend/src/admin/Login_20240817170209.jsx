import { Input, Stack } from '@chakra-ui/react'
import {} from 'react'

const Login = () => {
  return (
    <div>
        <Stack spacing={3}>
  <Input placeholder='extra small size' size='xs' />
  <Input placeholder='small size' size='sm' />
  <Input placeholder='medium size' size='md' />
  <Input placeholder='large size' size='lg' />
</Stack>
      
    </div>
  )
}

export default Login
