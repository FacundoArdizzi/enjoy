import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { Footer, NavBar } from '../components'

const FirstCertificate = () => {
  return (
    <Stack>
      <NavBar />
      <Box position='absolute' top='15vh' p={6} w='100%' h='fit-content' >
        <Heading color='black'>First Certificate</Heading>
      </Box>
      <Box position='absolute' top='100vh' w='100%' >
        <Footer />
      </Box>
    </Stack>
  )
}

export default FirstCertificate