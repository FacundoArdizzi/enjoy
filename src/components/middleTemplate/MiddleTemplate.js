import { Box, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { GrCertificate } from 'react-icons/gr'

const MiddleTemplate = () => (
  <Stack 
    bg='white' 
    w='100%'
    py='10vh'
  >
    <Box mb='8vh' textAlign='center'>
      <Heading 
        fontSize={{ base: '1.5rem', md: '2rem' }}
        fontWeight='normal'
        lineHeight='md'
      >Aprende inglés <Text fontWeight='bold' display='inline'>online</Text> de forma <Text fontWeight='bold' display='inline'>sencilla</Text> y con <Text fontWeight='bold' display='inline'>los mejores profesores.</Text> </Heading>
      <Text fontSize={{ base: '1rem', md: '1.5rem' }}>Cierra una fecha y una hora para tu próxima clase desde el móvil y aprende <Text display='inline' borderBottom='3px solid' borderColor='orange'>a tu propio ritmo</Text>. </Text>
    </Box>
    <Box>
      <Stack w={{ base: '100vw', md: '55vw'}} h='fit-content' bg='orange' >
        <Heading 
          fontWeight='normal'
          fontSize={{ base: '1.5rem', md: '2rem'}}
          lineHeight='lg'
          ml='3vw'
        ><Icon as={GrCertificate} mb='-1vh'/>  ¿Quieres preparar alguna certificación oficial?
        </Heading>
      </Stack>
      <Text 
        mx='auto'
        fontSize={{ base: '1rem', md: '1.3rem'}}
        maxW={{ base: '80vw', md: '60vw'}}
        mt='3vh'
        mb='1vh'
        textAlign='justify'
      >No hay problema, ayudamos a miles de alumnos a preparar sus exámenes de <Link color='lightBlue'>First Certificate</Link>, <Link color='lightBlue'>TOEFL</Link>, <Link color='lightBlue'>TOEIC</Link>... Nuestro idioma es el inglés y podemos ayudarte a conseguir lo que te propongas.
      </Text>
      <Text 
        mx='auto'
        textAlign='justify'
        maxW={{ base: '80vw', md: '60vw'}}
        fontSize={{ base: '1rem', md: '1.3rem'}}
      >Contacta con nosotros y te escribiremos para conocerte y organizar tu primera clase gratis.</Text>
      <Text 
        textAlign='center'
        mt='10vh'
        fontSize={{ base: '1.3rem', md: '1.5rem'}}
      >¡Aprender inglés nunca ha sido tan fácil!</Text>
    </Box>
  </Stack>
)

export default MiddleTemplate