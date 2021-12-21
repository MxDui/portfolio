import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/raleway/400.css";
import "@fontsource/poppins/400.css";
import "@fontsource/noto-sans/700.css";
const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Raleway",
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
