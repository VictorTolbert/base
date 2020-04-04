const defaultTheme = require('tailwindcss/defaultTheme')
const tinycolor = require('tinycolor2')
// const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      mono: [
        'JetBrains Mono',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    aspectRatio: {
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    extend: {
      screens: {
        '2xl': '1440px',
        dark: { raw: '(prefers-color-scheme: dark)' },
        light: { raw: '(prefers-color-scheme: light)' },
      },
      colors: {
        'booster-blue': '#003E7E', // hsla(210, 100%, 25%, 1)
        'booster-red': '#B3282D', // hsla(358, 63%, 43%, 1)
        // primary: 'var(--color-primary)',
        'primary-25': tinycolor('#2f855a').setAlpha(0.25).toRgbString(),
        'primary-50': tinycolor('#2f855a').setAlpha(0.5).toRgbString(),
        'primary-75': tinycolor('#2f855a').setAlpha(0.75).toRgbString(),
        primary: {
          100: '#EAF8F0',
          200: '#CBEDD8',
          300: '#ABE1C1',
          400: '#6CCB93',
          500: '#2DB564',
          600: '#29A35A',
          700: '#1B6D3C',
          800: '#14512D',
          900: '#0E361E',
        },
        // secondary: 'var(--color-secondary)',
        'secondary-25': tinycolor('#2b6cb0').setAlpha(0.25).toRgbString(),
        'secondary-50': tinycolor('#2b6cb0').setAlpha(0.5).toRgbString(),
        'secondary-75': tinycolor('#2b6cb0').setAlpha(0.75).toRgbString(),
        secondary: {
          100: '#EAF3FC',
          200: '#CBE1F7',
          300: '#ABCFF2',
          400: '#6DAAE8',
          500: '#2E86DE',
          600: '#2979C8',
          700: '#1C5085',
          800: '#153C64',
          900: '#0E2843',
        },
        // tertiary: 'var(--color-tertiary)',
        'tertiary-25': tinycolor('#ed8936').setAlpha(0.25).toRgbString(),
        'tertiary-50': tinycolor('#ed8936').setAlpha(0.5).toRgbString(),
        'tertiary-75': tinycolor('#ed8936').setAlpha(0.75).toRgbString(),
        tertiary: {
          100: '#FFF6EB',
          200: '#FEE9CD',
          300: '#FDDBAF',
          400: '#FCC174',
          500: '#FAA638',
          600: '#E19532',
          700: '#966422',
          800: '#714B19',
          900: '#4B3211',
        },
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        success: 'var(--color-success)',
        info: 'var(--color-info)',
        easyemailer: 'var(--color-easyemailer)',
        message: 'var(--color-message)',
        brand: '#1B2A60',
        facebook: '#3b5998',
        twitter: '#1da1f2',
        linkedin: '#0077b5',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.25)',
        'outline-red': '0 0 0 3px rgba(249, 89, 89, 0.15)',
        'outline-green': '0 0 0 3px rgba(5,202,160, 0.8)',
        'solid-white': '0 0 0 2px #fff',
      },
      height: {
        '1/4': '25%',
      },
      spacing: {
        '2px': '2px',
        7: '1.75rem',
        9: '2.25rem',
        11: '2.75rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        28: '7rem',
        44: '11rem',
        72: '18rem',
        80: '20rem',
        84: '21rem',
        96: '24rem',
        108: '27rem',
        128: '32rem',
        160: '40rem',
      },
      inset: {
        '-16': '-4rem',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'group-hover', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'group-hover', 'hover', 'focus'],
    display: ['responsive', 'group-hover'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus-within', 'focus', 'active'],
    zIndex: ['responsive', 'focus-within', 'focus'],
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-aspect-ratio'),
    require('tailwindcss-elevation')(['responsive']),
  ],
}