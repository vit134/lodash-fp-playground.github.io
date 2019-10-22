import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    showPanel: false,
    theme: {
      ...themes.normal,
      fontBase: '"Roboto", sans-serif',
    },
  },
});

configure(require.context('../src', true, /\.stories\.js$/), module);