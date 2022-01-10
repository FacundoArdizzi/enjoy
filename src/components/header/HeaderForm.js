import React, { useState } from 'react'
import { 
  Stack, 
  FormControl, 
  FormLabel, 
  Input, 
  Button,
  Text,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import emailjs from 'emailjs-com'
import { useFormik } from 'formik'
import validate from '../../constants/validate'

const HeaderForm = () => {
  const [isLoading, setLoading] = useState(false)
  const [alert, setAlert] = useState({
    status: '',
    message: ''
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
    <form onSubmit={formik.handleSubmit}>
      <Stack 
        direction='column' 
        alignItems='center'
        w={{ base: '100%', md: '30vw' }} 
        p={4} 
        borderRadius='lg' 
        border={{ base: '', md: '1.5px solid rgba(0,0,0,.25)' }}
        bg='rgba(0,0,0,.05)'
        m={{ base: 'auto', md: 'inherit' }}
      >
        <FormControl>
          <FormLabel 
            htmlFor='name' 
            fontSize={{ base: '1.3rem', md: 'inherit' }}
          >Nombre Completo</FormLabel>
          <Input 
            id='name' 
            type='text' 
            name='user_name' 
            borderColor='gray.400'
            transition='all .4s ease'
            _hover={{ outline: 'none' }}
            _focus={{ border: 'none', borderBottom: '1px solid orange', borderRadius: 'none' }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user_name}
          />
          {formik.errors.user_name && (
            <Text color='red' fontSize='.8rem'>{formik.errors.user_name}</Text>
          )}
        </FormControl>
        <FormControl>
          <FormLabel 
            htmlFor='email'
            fontSize={{ base: '1.3rem', md: 'inherit' }}
          >Email</FormLabel>
          <Input 
            id='email' 
            type='email' 
            name='user_email'
            borderColor='gray.400'
            transition='all .4s ease'
            _hover={{ outline: 'none' }}
            _focus={{ border: 'none', borderBottom: '1px solid orange', borderRadius: 'none' }}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.user_email}
          />
          {formik.errors.user_email && (
            <Text color='red' fontSize='.8rem'>{formik.errors.user_email}</Text>
          )}
        </FormControl>
        <FormControl>
          <FormLabel 
            htmlFor='tel'
            fontSize={{ base: '1.3rem', md: 'inherit' }}
            >Teléfono</FormLabel>
          <Input 
            id='tel' 
            type='tel'
            name='user_tel'
            borderColor='gray.400'
            transition='all .4s ease'
            _hover={{ outline: 'none' }}
            _focus={{ border: 'none', borderBottom: '1px solid orange', borderRadius: 'none' }} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user_tel}
          />
          {formik.errors.user_tel && (
            <Text color='red' fontSize='.8rem'>{formik.errors.user_tel}</Text>
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
            bg={{ base: 'transparent', md: 'orange'}}
            border='1px solid'
            borderColor={{ base: 'white', md: 'orange' }}
            transition='all .4s ease'
            _hover={{ 
              base: { color: 'yellow', borderColor: 'yellow' }, 
              md: {bg: 'transparent', color: 'orange'
            }}}
            _focus={{ outline: 'none', color: 'white' }}
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
  )
}

export default HeaderForm
