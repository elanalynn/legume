import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: 'orangered',
  colorSecondary: 'olive',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 5,

  // Typography
  fontBase: '"Asap", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 5,

  brandTitle: '🥒 Legume 🥕',
  brandUrl: 'https://legume.elanalynn.com',
});
