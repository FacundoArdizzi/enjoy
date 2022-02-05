import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const ButtonSubmit = ({ loading }) => {
  return (
    <Box w='100%' textAlign='center' >
      <Button
        type='submit'
        bg={{ base: 'transparent', md: 'orange' }}
        border='1.5px solid orange'
        borderRadius='1rem 0 1rem 0'
        color='orange'
        mt='2.5vh'
        px={{ base: '15vw', md: '5vw' }}
        _focus={{ outline: 'none' }}
        _hover={{
          base: {bg: 'orange', color: 'white'},
          md: {bg: 'transparent', color: 'orange', borderColor: 'orange'}
        }}
        isLoading={loading}
        transition={{ base: 'all 1s ease', md: 'all .4s ease'}}
      >
        Enviar
      </Button>
    </Box>
  )
}

export default ButtonSubmit
