import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const ButtonSubmit = ({ loading }) => {
  return (
    <Box w='100%' textAlign='center' >
      <Button
        type='submit'
        bg='orange'
        border='1.5px solid orange'
        borderRadius='1rem 0 1rem 0'
        color='white'
        mt='2.5vh'
        px='5vw'
        _focus={{ outline: 'none' }}
        _hover={{ bg: 'transparent', color: 'orange' }}
        isLoading={loading}
        transition='all .4s ease'
      >
        Enviar
      </Button>
    </Box>
  )
}

export default ButtonSubmit
