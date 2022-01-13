import React from "react";
import { Header, Benefits, MiddleTemplate, Slider, Form } from "../components";
import { Box } from "@chakra-ui/react";
import { NavBar, Footer } from "../components";
import MobileSlider from "../components/mobileSlider/MobileSlider";

const Landing = () => {
  return (
    <Box>
      <NavBar />
      <Header />
      <Box zIndex="999" position="relative" top={{ base: "0vh", md: "-15vh" }}>
        <Benefits />
      </Box>
      <MiddleTemplate />
      <Box display={{ base: "none", md: "inherit" }}>
        <Slider />
      </Box>
      <Box display={{ base: "inherit", md: "none" }}>
        <MobileSlider />
      </Box>
      <Form />
      <Footer />
    </Box>
  );
};

export default Landing;
