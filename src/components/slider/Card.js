import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Img, Text, Icon, Box } from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go'

const Card = ({ img, name, location, opinion }) => {
  return (
    <Stack 
      minW='15vw'
      h='75vh'
      minH='fit-content'
      alignItems='center'
      borderRadius='md'
      p={4}
      bg='white'
      boxShadow='lg'
    > 
      <Box 
        border='3px solid'
        borderColor='lightBlue'
        borderRadius='full'
        overflow='hidden' 
        bg='lightBlue'
        h='8rem'
        w='8rem'
      >
        <Img src={img} verticalAlign='top' m='0' />
      </Box>
      <Text fontWeight='bold'>{name}</Text>
      <Stack direction='row' alignItems='center' w='100%' textAlign='left'>
        <Icon as={GoLocation} color='red' />
        <Text display='inline'>{location}</Text>
      </Stack>
      <Stack pt={4} minH='fit-content'>
        <Box w='30%' h='2px' bg='gray' mx='auto'></Box>
        <Text>{opinion}</Text>
      </Stack>
    </Stack>
  )
}

Card.propTypes = {
  img: PropTypes.node,
  name: PropTypes.string,
  location: PropTypes.string, 
  opinion: PropTypes.string,
}

export default Card