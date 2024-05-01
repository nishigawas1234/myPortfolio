
import { extendTheme } from '@chakra-ui/react';

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
