import React, { useState } from 'react'
import { Stack, IconButton, Heading, Box } from '@chakra-ui/react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import opinions from '../../constants/opinions'
import SliderItem from './SliderItem'

const Slider = () => {
  const [index, setIndex] = useState(1)

  const previous = () => {
    index === 1 ? setIndex(3) : index === 2 ? setIndex(1) : setIndex(2)
  }

  const next = () => {
    index === 1 ? setIndex(2) : index === 2 ? setIndex(3) : setIndex(1)
  } 

  return (
    <Stack
      w='100%'
      alignItems='center'
      py='8vh'
      px='5vw'
    >
      <Heading 
        color='lightBlue'
        textAlign='center'
        fontSize='1.8rem'
      >Conoce lo que nuestros clientes piensan de nosotros</Heading>
      <Stack
        direction='row'
        w='80vw'
        justifyContent='space-between'
        alignItems='center'
        mt='5vh'
      >
        <IconButton 
          onClick={previous}
          as={AiOutlineLeft} 
          w={12} 
          h={12} 
          bg='transparent' 
          color='gray' 
          cursor='pointer'
          _hover={{ color: 'black' }}
          _focus={{ color: 'black', bg: 'transparent' }} 
        />
        <Stack w='50vw' overflow='hidden'> 
          <Stack 
            p={4} 
            direction='row' 
            spacing='5vw'
            transition='all 1s ease-out'
            ml={index === 1 ? '0' : index === 2 ? '-55vw' : '-110vw'} 
          >
            <SliderItem content={opinions.slice(0,3)} />
            <SliderItem content={opinions.slice(3,6)} />
            <SliderItem content={opinions.slice(6,9)} />
          </Stack>
        </Stack>
        <IconButton
          onClick={next}
          as={AiOutlineRight} 
          w={12} 
          h={12} 
          bg='transparent' 
          color='gray' 
          cursor='pointer'
          _hover={{ color: 'black' }}
          _focus={{ color: 'black', bg: 'transparent' }}
        />
      </Stack>
    </Stack>
  )
}

export default Slider
