import { Stack, Heading, Link, Button } from '@chakra-ui/react'
import React from 'react'
import opinions from '../constants/opinions'
import MobileSliderItem from '../components/mobileSlider/MobileSliderItem'
import { Link as ReachLink } from 'react-router-dom'

const Opinions = () => {
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
        <MobileSliderItem opinions={opinions.slice(3,6)}/>
        <MobileSliderItem opinions={opinions.slice(6,9)}/>
      </Stack>
      <Link display='hidden' as={ReachLink} to='/'>
        <Button 
          mt={3} 
          variant='text' 
          textTransform='uppercase' 
          fontWeight='bold' 
          _hover={{ textDecoration: 'underline', color: 'orange' }}
          _focus={{ outline: 'none' }}
        >
          volver
        </Button>
      </Link>
    </Stack>
  )
}

export default Opinions