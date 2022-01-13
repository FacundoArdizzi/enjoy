import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import '@fontsource/raleway'
import { Routes, Route } from 'react-router-dom'
import { Landing, Opinions, FirstCertificate, TOEFL, TOEIC, IELTS } from './views'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/opiniones' element={<Opinions />} />
        <Route path='/first-certificate' element={<FirstCertificate />} />
        <Route path='/toefl' element={<TOEFL />} />
        <Route path='/toeic' element={<TOEIC />} />
        <Route path='/ielts' element={<IELTS />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
