import { Stack, Heading, Button, Link } from '@chakra-ui/react'
import React from 'react'
import opinions from '../../constants/opinions'
import MobileSliderItem from './MobileSliderItem'

const MobileSlider = () => {
  return (
    <Stack 
      w='100%'
      alignItems='center'
      py='5vh'
      spacing={6}
    >
      <Heading 
        color='lightBlue'
        textAlign='center'
        fontSize='1.5rem'
      >Conoce lo que nuestros clientes piensan de nosotros</Heading>
      <Stack px={4} pb={4} w='100%' minH='fit-content'>
        <MobileSliderItem opinions={opinions.slice(0,3)}/>
      </Stack>
      <Link display='hidden' href=''>
        <Button 
          mt={3} 
          variant='text' 
          textTransform='uppercase' 
          fontWeight='bold' 
          _hover={{ textDecoration: 'underline', color: 'orange' }}
          _focus={{ outline: 'none' }}
        >
          ver mas
        </Button>
      </Link>
    </Stack>
  )
}

export default MobileSlider