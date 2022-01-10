import { Stack, Box, Img, Text, Icon, StackDivider } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import { GoLocation } from 'react-icons/go'


const MobileCard = ({ img, name, location, opinion, revert }) => {
  return (
    <Stack w='100%' alignItems={revert ? 'flex-end' : ''} minH='fit-content' >
      <Stack 
        w='95%' 
        bg='white'
        borderRadius='md' 
        boxShadow='lg' 
        p={4} 
        alignItems={revert ? 'revert' : 'initial'}
      >
        <Stack direction='row' divider={<StackDivider borderColor='gray.200' />}>
          <Box 
            border='3px solid'
            borderColor='lightBlue'
            borderRadius='full'
            overflow='hidden' 
            w='12vw' 
            h='12vw'
            bg='lightBlue'
          >
            <Img src={img} verticalAlign='top' m='0'/>
          </Box>
          <Stack>
            <Text fontWeight='bold'>{name}</Text>
            <Stack direction='row' alignItems='center' w='100%' textAlign='left'>
              <Icon as={GoLocation} color='red' />
              <Text display='inline'>{location}</Text>
            </Stack>
          </Stack>
        </Stack>
        <Text fontSize='.9rem'>{opinion}</Text>
      </Stack>
    </Stack>
  )
}

MobileCard.propTypes = {
  img: PropTypes.node,
  name: PropTypes.string,
  location: PropTypes.string, 
  opinion: PropTypes.string,
  revert: PropTypes.bool,
}

export default MobileCard