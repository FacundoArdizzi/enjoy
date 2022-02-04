import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from "react";
import { useFormikContext } from 'formik'
import styles from './LabelAnimation.module.css'

const InputPhone = () => {
  const [show, setShow] = useState(false)
  const {
    values: { user_tel },
    handleChange,
    handleBlur,
    errors,
  } = useFormikContext()

  return (
    <FormControl transition="all .5s ease">
      <FormLabel 
        position='relative'
        bottom={{ base: '-4vh', md: '-5vh'}}
        htmlFor="tel"
        className={show && styles.animated }
      >Teléfono</FormLabel>
      <Input
        onFocus={() => setShow(true)}
        onChange={handleChange}
        onBlur={handleBlur}
        value={user_tel}
        autoComplete='off'
        p={4}
        id="tel"
        type="tel"
        name="user_tel"
        variant="flushed"
        size="sm"
        _hover={{ borderColor: "gray.400" }}
      />
      {errors.user_tel && (
        <Text color="red" fontSize=".8rem" mt="1vh">
          {errors.user_tel}
        </Text>
      )}
    </FormControl>
  );
};

export default InputPhone
