import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

/// global background colour
const kBgLightColour = '#f0e8db';
const kBgDarkColour = '#202023';

/// link colour
const kLinkLightColour = '#3d7aed';
const kLinkDarkColour = '#ff63c3';

/// heading fonts
const kHeadingFonts = "'M PLUS Rounded 1c'";

/// glassTeal colour
const kGlassTealColour = '#88ccca';

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode(kBgLightColour, kBgDarkColour)(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode(kLinkLightColour, kLinkDarkColour)(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: kHeadingFonts,
};

const colors = {
  glassTeal: kGlassTealColour,
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
