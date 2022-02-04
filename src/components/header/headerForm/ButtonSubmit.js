import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const ButtonSubmit = ({ loading }) => {
  return (
    <Box w='100%' textAlign='center' >
      <Button
        type='submit'
        bg={{ base: 'transparent', md: 'orange' }}
        border={{ base: 'transparent', md: '1.5px solid orange' }}
        borderRadius='1rem 0 1rem 0'
        color={{ base: 'white', md: 'white'}}
        mt='2.5vh'
        px='5vw'
        _focus={{ outline: 'none' }}
        _hover={{
          base: { border: '1px solid white', borderRadius: '1rem 0 1rem 0' },
          md: { bg: 'transparent', color: 'orange' },
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
