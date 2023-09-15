/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @type {import('tailwindcss').Config} */

export const purge = {
  mode: 'all',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './next.config.js',
  ],
  options: {
    extractors: [
      {
        extensions: [],
        extractor: (content) => {
          // Capture as liberally as possible, including things like `h-(screen-1.5)`
          const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

          // Capture classes within other delimiters like .block(class="w-1/2") in Pug
          const innerMatches =
            content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) ||
            [];

          return broadMatches.concat(innerMatches);
        },
      },
    ],
  },
};
export const theme = {
  extend: {
    colors: {
      green: {
        DEFAULT: '#009441',
        50: '#00F069',
        100: '#00E665',
        200: '#00D15C',
        300: '#00BD53',
        400: '#00A84A',
        500: '#009441',
        600: '#007B36',
        700: '#00612B',
        800: '#00481F',
        900: '#002E14',
      },
      gray: {
        DEFAULT: '#2d2d2f',
        50: '#f5f5f5',
        100: '#eaeaea',
        200: '#cbcbcb',
        300: '#ababac',
        400: '#6c6c6d',
        500: '#2d2d2f',
        600: '#29292a',
        700: '#222223',
        800: '#1b1b1c',
        900: '#161617',
      },
    },
    fontFamily: {
      sans: ['Inter var', ..._fontFamily.sans],
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.700'),
          h2: {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
            color: theme('colors.gray.900'),
          },
          h3: {
            fontWeight: '600',
            color: theme('colors.gray.900'),
          },
          'ol li:before': {
            fontWeight: '600',
            color: theme('colors.gray.500'),
          },
          'ul li:before': {
            backgroundColor: theme('colors.gray.400'),
          },
          code: {
            color: theme('colors.gray.900'),
          },
          a: {
            color: theme('colors.gray.900'),
          },
          pre: {
            color: theme('colors.gray.200'),
            backgroundColor: theme('colors.gray.800'),
          },
          blockquote: {
            color: theme('colors.gray.900'),
            borderLeftColor: theme('colors.gray.200'),
          },
        },
      },
    }),
  },
};
export const variants = {};
export const plugins = [require('@tailwindcss/typography')];
export const future = {
  purgeLayersByDefault: true,
  removeDeprecatedGapUtilities: true,
};
