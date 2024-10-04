'use client'

import { extendTheme } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource-variable/noto-sans-jp';

const theme = extendTheme({
  fonts: {
    heading: `'Noto Sans JP',sans-serif`,
    body: `'Noto Sans JP',sans-serif`,
  },
});

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}