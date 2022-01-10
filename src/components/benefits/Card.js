import { Heading, Stack, Text, Box } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, children }) => {
  return (
    <Stack 
      alignItems='center' 
      h={{ base: 'fit-content', md: '58vh' }}
      minH='fit-content'
      minW={{ base: '80vw', md: '28vw' }}
      maxW='20vw' 
      p={8} 
      borderRadius='lg' 
      borderBottom={{ base: '5px solid', md: '' }}
      borderColor={{ base: 'orange', md: 'transparent' }}
      boxShadow='xl' 
      bg='white'
      boxSizing='border-box'
      _hover={{ borderBottom: '5px solid', borderColor: 'orange' }}
    >
      <Box minH={{base: '0', md: '15vh'}} mb={{ base: '2vh', md: '' }}>
        <Heading textAlign='center'>{title}</Heading>
      </Box>
      <Text 
        fontSize={{ base: '1.2rem', md: ''}}
        textAlign='center'
      >{children}</Text>
    </Stack>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default Card