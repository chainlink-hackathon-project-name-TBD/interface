import { extendTheme } from '@chakra-ui/react';
import { GlobalStyleProps } from '@chakra-ui/theme-tools';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

export const theme = extendTheme({
  config,
  fonts: {
    body: 'Graphik',
    heading: 'Graphik-Medium',
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      'html, body': {
        color: props.colorMode === 'dark' ? 'gray.100' : 'blackAlpha.800',
        backgroundColor:
          props.colorMode === 'light' ? 'gray.100' : 'blackAlpha.800',
        minHeight: '100vh',
      },
      '*': {
        // lineHeight: '1.1em',
      },
      a: {
        width: 'full',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
        color: 'teal.900',
        _hover: {
          color: 'teal.500',
          backgroundColor: 'teal.700',
        },
      },
    },
    Heading: {
      baseStyle: { lineHeight: '1em', fontWeight: 'normal' },
    },
    Badge: {
      baseStyle: { borderRadius: 'lg' },
    },
  },
});
