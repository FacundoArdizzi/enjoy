import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import '@fontsource/raleway'
import { Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Opinions from './views/Opinions'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/opiniones' element={<Opinions />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
