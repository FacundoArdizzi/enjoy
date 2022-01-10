import { Stack } from '@chakra-ui/react'
import React from 'react'
import MobileCard from './MobileCard'

const MobileSliderItem = ({ opinions }) => {
  return (
    <Stack w='100%' h='100%' spacing='2vh'>
      <MobileCard
        key={Math.random()}
        img={opinions[0].img}
        name={opinions[0].name}
        location={opinions[0].location}
        opinion={opinions[0].opinion}
      />
      <MobileCard
        revert={true}
        key={Math.random()}
        img={opinions[1].img}
        name={opinions[1].name}
        location={opinions[1].location}
        opinion={opinions[1].opinion}
      />
      <MobileCard
        key={Math.random()}
        img={opinions[2].img}
        name={opinions[2].name}
        location={opinions[2].location}
        opinion={opinions[2].opinion}
      />
    </Stack>
  )
}

export default MobileSliderItem