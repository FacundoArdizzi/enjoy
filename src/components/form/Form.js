import React, { useState } from 'react'
import { useFormik } from 'formik'
import validate from '../../constants/validate'
import emailjs from 'emailjs-com'
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Alert,
  AlertIcon,
  Heading,
} from '@chakra-ui/react'

const Form = () => {
  const [isLoading, setLoading] = useState(false)
  const [alert, setAlert] = useState({
    status: '',
    message: '',
  })

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      user_tel: '',
    },
    validate,
    onSubmit: values => {
      setLoading(true)
      emailjs.send('service_enjoy', 'template_enjoy', values, 'user_xCvEe6MX43W9eYQsCRp0h')
      .then((result) => {
        setLoading(false)
        setAlert({
          status: 'success',
          message: 'Revisa tu casilla! Deberías haber recibido un correo'
        })
      }, (error) => {
        setLoading(false)
        setAlert({
          status: 'error',
          message: 'Algo salió mal, por favor intenta de nuevo mas tarde'
        })
      })
    }
  })

  return (
    <Stack bg='white' py='8vh'>
      <Heading textAlign='center' fontWeight='medium'>
        ¡Solicita tu clase <Text fontWeight='bold' display='inline'>gratis</Text>!
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <Stack 
          w={{ base: '70vw', md:'50vw' }}
          m='auto'
          mt='5vh'
          spacing={8}
          >
        <FormControl>
            {formik.values.user_name ? (
              <FormLabel htmlFor='name'>Nombre Completo</FormLabel>
            ) : null}
            <Input 
              p={4}
              placeholder={formik.values.user_name ? '' : 'Nombre Completo'}
              transition='all .5s ease'
              id='name' 
              type='text' 
              name='user_name' 
              variant='flushed'
              size='sm'
              _hover={{ borderColor: 'gray.400' }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_name}
              />
            {formik.errors.user_name && (
              <Text color='red' fontSize='.8rem' mt='1vh'>{formik.errors.user_name}</Text>
              )}
          </FormControl>
          <FormControl transition='all .5s ease' >
            {formik.values.user_email ? (
              <FormLabel htmlFor='email'>Email</FormLabel>
              ) : null}
            <Input
              p={4}
              placeholder={formik.values.user_email ? '' : 'Email'}
              id='email' 
              type='email' 
              name='user_email'
              size='sm'
              variant='flushed'
              _hover={{ borderColor: 'gray.400' }}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.user_email}
              />
            {formik.errors.user_email && (
              <Text color='red' fontSize='.8rem' mt='1vh'>{formik.errors.user_email}</Text>
            )}
          </FormControl>
          <FormControl transition='all .5s ease' >
            {formik.values.user_tel ? (
              <FormLabel htmlFor='tel'>Teléfono</FormLabel>
              ) : null}
            <Input 
              p={4}
              placeholder={formik.values.user_tel ? '' : 'Teléfono'}
              id='tel' 
              type='tel'
              name='user_tel'
              variant='flushed'
              size='sm'
              _hover={{ borderColor: 'gray.400' }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_tel}
              />
            {formik.errors.user_tel && (
              <Text color='red' fontSize='.8rem' mt='1vh'>{formik.errors.user_tel}</Text>
              )}
          </FormControl>
          <Stack w='100%' alignItems='center' mt='4vh'>
            <Button 
              mt='3vh'
              type='submit'
              paddingX='6em' 
              w='fit-content'
              variant='solid'
              color='white'
              bg='orange'
              border='1px solid'
              borderColor='orange'
              transition='all .4s ease'
              _hover={{ bg: 'transparent', color: 'orange' }}
              _focus={{ outline: 'none' }}
              isLoading={isLoading}
              >Enviar</Button>
          </Stack>
          {alert.status === 'error' ? (
            <Alert status='error'> 
              <AlertIcon />
              {alert.message} 
            </Alert>
          ) : alert.status === 'success' ? (
            <Alert status='success'>
              <AlertIcon />
              {alert.message}
            </Alert>
          ) : null}
        </Stack>
      </form>
    </Stack>
  )
}

export default Form