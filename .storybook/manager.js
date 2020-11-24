import {addons} from '@storybook/addons';
// import {themes} from '@storybook/theming';
import {create} from '@storybook/theming/create';
import Logo from '../side-nav-logo.png';

const theme = create({
  base: 'dark',
  brandTitle: 'React Side Nav',
  brandUrl: 'https://github.com/hadnet',
  brandImage: Logo,
});

addons.setConfig({
  theme,
});
