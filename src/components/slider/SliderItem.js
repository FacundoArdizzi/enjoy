import { Stack } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

const SliderItem = ({ content }) => {
  return (
    <Stack direction='row' h='fit-content' w='100%' alignItems='center' spacing={6} >
      {content.map((c,i) => <Card
        key={i}
        img={c.img}
        name={c.name}
        location={c.location}
        opinion={c.opinion}
      />)}
    </Stack>
  )
}

export default SliderItem
