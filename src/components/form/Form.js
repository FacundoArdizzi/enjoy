import React, { useState } from 'react'
import { Formik } from 'formik'
import schema from '../../constants/schema'
import emailjs from 'emailjs-com'
import { Stack, Text, Heading } from '@chakra-ui/react'
import InputName from './InputName'
import InputEmail from './InputEmail'
import InputPhone from './InputPhone'
import ButtonSubmit from '../header/headerForm/ButtonSubmit'
import swal from 'sweetalert'

const Form = () => {
  const [isLoading, setLoading] = useState(false)

  return (
    <Stack bg='white' py='8vh'>
      <Heading textAlign='center' fontWeight='medium'>
        ¡Solicita tu clase <Text fontWeight='bold' display='inline'>gratis</Text>!
      </Heading>
      <Formik
        initialValues={{
          user_name: "",
          user_email: "",
          user_tel: "",
        }}
        validationSchema={schema}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            emailjs.send("service_enjoy", "template_enjoy", values, "user_xCvEe6MX43W9eYQsCRp0h")
            swal('Excelente!', 'Te contactaremos lo antes posible', 'success')
            setLoading(false)
          } catch (error) {
            swal('Ups!', 'Por favor intentalo nuevamente mas tarde', 'error')
            setLoading(false)
          }
        }}
      >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Stack 
            w={{ base: '70vw', md:'50vw' }}
            m='auto'
            mt='5vh'
            spacing={8}
          >
            <InputName />  
            <InputEmail />
            <InputPhone />
            <ButtonSubmit loading={isLoading} />
          </Stack>
        </form>
      )}
      </Formik>
    </Stack>
  )
}

export default Form