import React from 'react'
import { NavBar, Footer } from './components'
import Landing from './views/Landing'
import Opinions from './views/Opinions'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import '@fontsource/raleway'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Route path='/home' component={Landing} />
    </ChakraProvider>
  );
}

export default App;

