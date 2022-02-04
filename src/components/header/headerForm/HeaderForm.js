import { Formik } from "formik";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import InputName from "./InputName";
import { Stack } from "@chakra-ui/react";
import InputPhone from "./InputPhone";
import schema from "../../../constants/schema";
import swal from "sweetalert";
import ButtonSubmit from "./ButtonSubmit";
import InputEmail from "./InputEmail";
/* import { IoIosTrendingUp } from "react-icons/io"; */

const HeaderForm = () => {
  const [loading, setLoading] = useState(false);
  return (
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
          emailjs.send(
            "service_enjoy",
            "template_enjoy",
            values,
            "user_xCvEe6MX43W9eYQsCRp0h"
          );
          swal("Excelente!", "Te contactaremos lo antes posible", "success");
          setLoading(false);
        } catch (error) {
          swal("Ups!", "Por favor intentalo nuevamente mas tarde", "error");
          setLoading(false);
        }
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Stack
            border="1.5px solid rgba(0,0,0,.25)"
            borderRadius="lg"
            bg="rgba(0,0,0,.05)"
            w={{ base: "", md: "32vw" }}
            p="1rem"
          >

            <InputName />
            <InputEmail />
            <InputPhone />
            <ButtonSubmit loading={loading} />
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default HeaderForm;
