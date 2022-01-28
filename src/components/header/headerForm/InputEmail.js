import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { useFormikContext } from 'formik';
import React from 'react';

const InputEmail = () => {
  const {
    values: { user_email },
    handleChange,
    handleBlur,
    errors,
  } = useFormikContext()
  return (
    <FormControl isRequired>
      <FormLabel htmlFor="email" fontSize={{ base: "1.3rem", md: "inherit" }}>
        Email
      </FormLabel>
      <Input
        autoComplete='off'
        id="email"
        type="email"
        name="user_email"
        borderColor="gray.400"
        transition="all .4s ease"
        _hover={{ outline: "none" }}
        _focus={{
          border: "none",
          borderBottom: "1px solid orange",
          borderRadius: "none",
        }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={user_email}
      />
    </FormControl>
  );
};

export default InputEmail
