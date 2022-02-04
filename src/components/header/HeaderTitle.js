import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const HeaderTitle = () => (
  <Stack mb={{ base: '3.5vh', md: '' }}>
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
  </Stack>
)

export default HeaderTitle