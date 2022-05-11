import type { AppProps } from 'next/app';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import '../styles/globals.css';
import { theme } from '../utils/theme';
import { Navbar } from '../components/Navbar';
import { Config, DAppProvider, Localhost } from '@usedapp/core';

const config: Config = {
  readOnlyChainId: Localhost.chainId,
  // readOnlyUrls: {
  //   [Localhost.chainId]: 'http://127.0.0.1:8545',
  // },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Box h={20} />
        <Container as="main" maxW="container.xl">
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </DAppProvider>
  );
}

export default MyApp;
