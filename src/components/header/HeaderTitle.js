import { Box, Heading, Icon, Stack } from '@chakra-ui/react'
import React from 'react'
import { IoIosTrendingUp } from 'react-icons/io'

const HeaderTitle = () => (
  <Stack>
    <Box display={{ base: 'inherit', md: 'none' }} position='relative' top='5em' left='-15vw' >
      <Icon as={IoIosTrendingUp} color='yellow' w='20em' h='20em' display={{ base: 'inherit', md: 'hidden'}}/>
    </Box>
    <Box position={{ base: 'relative', md: 'inherit' }} top={{ base: '-20em', md: 'inherit' }}>
      <Heading 
        as='h1'
        textTransform='capitalize'
        fontWeight='bold'
        fontSize='1.8rem'
      >Aprende Inglés Online Fácil y Rápido.</Heading>
      <Heading 
        as='h2'
        fontWeight='semi-bold'
        fontSize='1.5rem'
      >Aprende inglés y prepara tu certificación con l@s mejores profesor@s</Heading>
    </Box>
  </Stack>
)

export default HeaderTitle