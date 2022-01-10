import React from 'react'
import { Box, Img, Stack } from '@chakra-ui/react'
import headerBg from '../../assets/header-bg.jpg'
import HeaderTitle from './HeaderTitle'
import Border from './Border'
import HeaderForm from './HeaderForm'

const HeaderLayout = () => (
  <Stack 
    overflow='hidden' 
    bg={{ base: 'orange', md: 'transparent'}} 
    h={{ base: '105vh', md: 'inherit'}} 
  >
    <Img src={headerBg} zIndex='-1' display={{ base: 'none', md: 'inherit', lg: 'inherit' }} />
    <Box position='absolute' top='12vh' left='5vw'>
      <HeaderTitle />
    </Box>
    <Box 
      w={{ base: '100%', md: 'inherit' }}
      px={{ base: '5vw', md: 'inherit' }}
      position='absolute' 
      top={{ base: '40vh', md: '30vh' }} 
      left={{ base: 'inherit', md: '5vw' }}
    >
      <HeaderForm />
    </Box>
    <Box position='absolute' top='95vh' w='101vw' zIndex='1'>
      <Border />
    </Box>
  </Stack>
)

export default HeaderLayout