import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from "react";
import { useFormikContext } from "formik";
import styles from './LabelAnimation.module.css'

const InputName = () => {
  const [show, setShow] = useState(false)
  const {
    values: { user_name },
    handleChange,
    handleBlur,
    errors,
  } = useFormikContext()

  return (
    <FormControl>
      <FormLabel
        htmlFor="name" 
        position='relative'
        bottom={{ base: '-4vh', md: '-5vh'}}
        className={show && styles.animated}
      >Nombre Completo</FormLabel>
      <Input
        onFocus={() => setShow(true)}
        onChange={handleChange}
        onBlur={handleBlur}
        value={user_name}
        autoComplete='off'
        p={4}
        transition="all .5s ease"
        id="name"
        type="text"
        name="user_name"
        variant="flushed"
        size="sm"
        _hover={{ borderColor: "gray.400" }}
      />
      {errors.user_name && (
        <Text color="red" fontSize=".8rem" mt="1vh">
          {errors.user_name}
        </Text>
      )}
    </FormControl>
  );
};

export default InputName;
