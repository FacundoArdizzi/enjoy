import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { useFormikContext } from "formik";
import React from "react";

const InputName = () => {
  const {
    values: { user_name },
    handleChange,
    handleBlur,
    errors,
  } = useFormikContext()

  return (
    <FormControl isRequired>
      <FormLabel htmlFor="name" fontSize={{ base: "1.3rem", md: "inherit" }}>
        Nombre Completo
      </FormLabel>
      <Input
        autoComplete='off'
        id="name"
        type="text"
        name="user_name"
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
        value={user_name}
      />
    </FormControl>
  );
};

export default InputName;
