import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { useFormikContext } from "formik";
import React, { useState } from "react";
import styles from './LabelAnimation.module.css'

const InputEmail = () => {
  const [show, setShow] = useState(false)
  const {
    values: { user_email },
    handleChange,
    handleBlur,
    errors,
  } = useFormikContext()

  return (
    <FormControl transition="all .5s ease">
      <FormLabel 
        position='relative'
        bottom='-5vh'
        htmlFor="email" 
        className={show && styles.animated}
      >Email</FormLabel>
      <Input
        onFocus={() => setShow(true)}
        onBlur={handleBlur}
        onChange={handleChange}
        value={user_email}
        p={4}
        id="email"
        type="email"
        name="user_email"
        size="sm"
        variant="flushed"
        _hover={{ borderColor: "gray.400" }}
      />
      {errors.user_email && (
        <Text color="red" fontSize=".8rem" mt="1vh">
          {errors.user_email}
        </Text>
      )}
    </FormControl>
  );
};

export default InputEmail
