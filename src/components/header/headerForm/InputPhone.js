import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { useFormikContext } from 'formik';
import React from "react";

const InputPhone = () => {
  const {
    values: { user_tel },
    handleChange,
    handleBlur,
    errors,
  } = useFormikContext()
  
  return (
    <FormControl>
      <FormLabel htmlFor="tel" fontSize={{ base: "1.3rem", md: "inherit" }}>
        Teléfono
      </FormLabel>
      <Input
        autoComplete='off'
        id="tel"
        type="tel"
        name="user_tel"
        borderColor={{ base: 'whiteAlpha.700', md:"gray.400" }}
        transition="all .4s ease"
        _hover={{ outline: "none" }}
        _focus={{
          border: "none",
          borderBottom: "1px solid orange",
          borderRadius: "none",
        }}
        onChange={handleChange}
        onBlur={handleBlur}
        value={user_tel}
      />
      {errors.user_tel && (
        <Text color="red" fontSize=".8rem">
          {errors.user_tel}
        </Text>
      )}
    </FormControl>
  );
};

export default InputPhone
