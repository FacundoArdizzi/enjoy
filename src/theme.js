import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#F6F6F6',
        overflowX: 'hidden',
        '::-webkit-scrollbar': {
          width: '7px',
          height: '5vh',
        },
        '::-webkit-scrollbar-thumb': {
          bg: '#AAA',
          borderRadius: 'xl',
          marginX: '.2vw',
          width: '.5vw',
        },
        paddingTop: '10vh',
      }
    },
  },
  colors: {
    orange: '#FF922D',
    lightBlue: '#4D84FE',
    blue: '4C83FD',
  },
  fonts: {
    heading: 'Raleway',
    body: 'Raleway'
  },
})

export default theme
