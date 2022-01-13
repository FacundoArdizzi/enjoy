import { Box, Heading, Icon, Stack, Link } from '@chakra-ui/react'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link as ReachLink } from 'react-router-dom'

const NavBar = () => (
  <Stack 
    position='fixed' 
    top='0'
    direction='row' 
    h='10vh'
    w='100vw' 
    bg='orange' 
    color='white' 
    p={2} 
    alignItems='center' 
    justifyContent='space-between'
    zIndex='9999'
  >
    <Box>
      <Link 
        display='hidden' 
        as={ReachLink} 
        to='/' 
        _hover={{ outline: 'none', textDecoration: 'none' }}
        _focus={{ outline: 'none' }}
      >
        <Heading fontWeight='semi-bold'>Enjoy!</Heading>
      </Link>
    </Box>
    <Link 
      display='hidden'
      href='https://api.whatsapp.com/send?phone=34636213876&text=Quisiera%20coordinar%20la%20primer%20clase%20gratis!%20'
    > 
      <Stack
        mr='1vw'
        borderRadius='full' 
        bg='whatsapp.500'
        fontSize='2.5rem'
        p={2}
        _focus={{ outline: 'none' }}
        _hover={{ outline: 'none' }}
      >
        <Icon as={FaWhatsapp} size='xl'/>
      </Stack>
    </Link>
  </Stack>
)

export default NavBar
