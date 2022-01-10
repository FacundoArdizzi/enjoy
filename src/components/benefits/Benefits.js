import { Stack } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

const Benefits = () => {
  return (
    <Stack 
      w='100vw'
      alignItems='center'
      paddingBottom={{ base: '8vh', md: '' }}
    >
      <Stack 
        direction={{ base: 'column', md: 'row'}}
        spacing={8}
      >
        <Card 
          title='Primera Clase Gratis' 
          children='Recibe tu primera clase totalmente gratis. Sin compromiso y sin pagar nada. Después podrás decidir si somos la escuela que necesitas.' 
        />
        <Card 
          title='Profesores de Todo el Mundo' 
          children='Aprende con los mejores profesores que puedes encontrar online. Contamos con un equipo muy variado para adaptarnos a la perfección a tus horarios y necesidades.' 
        />
        <Card 
          title='Clases a Medida' 
          children='No importa tu nivel de inglés ni cuáles sean tus objetivos, estamos seguros de contar con el profesor perfecto para ti. Nos adaptamos a tus gustos, horarios, días de la semana...Aprende inglés con nuestras clases a medida. ' 
        />
      </Stack>
    </Stack>
  )
}

export default Benefits