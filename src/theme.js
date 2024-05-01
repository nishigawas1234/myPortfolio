
import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: "dark",
}

const theme = extendTheme({
  
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  config
});
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}


export default theme;
