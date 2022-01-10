import React from 'react'
import {
  Header,
  Benefits,
  MiddleTemplate,
  Slider,
  Form,
} from '../components'
import { Box } from '@chakra-ui/react'
import MobileSlider from '../components/mobileSlider/MobileSlider'

const Landing = () => (
  <Box>
    <Header />
    <Box zIndex='999' position='relative' top={{ base: '0vh', md: '-15vh'}}>
      <Benefits />
    </Box>
    <MiddleTemplate />
    <Box display={{ base: 'none', md: 'inherit' }}>
      <Slider />
    </Box>
    <Box display={{ base: 'inherit', md: 'none' }}>
      <MobileSlider />
    </Box>
    <Form />
  </Box>
)

export default Landing