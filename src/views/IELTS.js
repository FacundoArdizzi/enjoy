import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { Footer, NavBar } from '../components'

const IELTS = () => {
  return (
    <Stack>
      <NavBar />
      <Box position='absolute' top='15vh' p={6} w='100%' h='fit-content' >
        <Heading color='black'>IELTS</Heading>
      </Box>
      <Box position='absolute' top='100vh' w='100%' >
        <Footer />
      </Box>
    </Stack>
  )
}

export default IELTS