import { Stack, Heading, Button, Collapse, Icon } from '@chakra-ui/react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import React, { useState } from 'react'
import opinions from '../../constants/opinions'
import MobileCard from './MobileCard'

const MobileSlider = () => {
  const [show, setShow] = useState(false)
  return (
    <Stack 
      w='100%'
      alignItems='center'
      py='5vh'
      spacing={6}
    >
      <Heading 
        color='lightBlue'
        textAlign='center'
        fontSize='1.5rem'
      >Conoce lo que nuestros clientes piensan de nosotros</Heading>
      <Stack justifyContent='center'>
        <Collapse in={show} px={4} pb={4} w='100%' startingHeight='30vh'>
          {opinions.map(c => <MobileCard 
            key={c.id}
            img={c.img}
            name={c.name}
            location={c.location}
            opinion={c.opinion}
          />)}
        </Collapse>
        <Button
          onClick={() => setShow(!show)}
          bg='transparent'
          color='orange'
          _focus={{ outline: 'none' }}
        >
          {show ? <Icon as={HiChevronUp} w='1.2rem' h='1.2rem' /> : <Icon as={HiChevronDown} w='1.2rem' h='1.2rem' />}
        </Button>
      </Stack>
    </Stack>
  )
}

export default MobileSlider