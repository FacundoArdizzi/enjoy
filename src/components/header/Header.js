import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import headerBg from '../../assets/bgCompressed.jpg'
import HeaderTitle from './HeaderTitle'
import Border from './Border'
import HeaderForm from './headerForm/HeaderForm'
import styles from './Header.module.css'


const HeaderLayout = () => (
  <Stack 
    overflow='hidden' 
    h={{ base: '105vh', md: '128vh'}}
    bg={{ base: 'orange' }}
    bgSize='cover'
    bgImage={{ base: '', md: headerBg }}
    justifyContent='space-between'
  >
    <Stack
      className={styles.header}
      justifyContent={{ base: '', md: 'space-around'}} 
      h={{ base: '', md: '68vh'}}
      px={{ base: '5vw', md: 'inherit' }}
      mt='5vh'
      ml={{ base: 'none', md: '8vh'}}
      overflow='hidden'
      maxW={{ base: '', md: '56.5vw'}}
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