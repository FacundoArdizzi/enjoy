import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import headerBg from '../../assets/header-bg.jpg'
import HeaderTitle from './HeaderTitle'
import Border from './Border'
import HeaderForm from './HeaderForm'

const HeaderLayout = () => (
  <Stack 
    overflow='hidden' 
    h={{ base: '105vh', md: '125vh'}}
    bg={{ base: 'orange' }}
    bgSize='cover'
    bgImage={headerBg} 
    justifyContent='space-between'
  >
    <Stack 
      justifyContent='space-between'
      px={{ base: '5vw', md: 'inherit' }}
      mt='5vh'
      ml='5vw'
    >
      <HeaderTitle />
      <HeaderForm />
    </Stack>
    <Box>
      <Border />
    </Box>
  </Stack>
)

export default HeaderLayout