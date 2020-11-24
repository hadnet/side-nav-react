// import original module declarations
import 'styled-components';
import type {Theme, ThemeProps} from '../src/components/SideNav.types';

// and extend DefaultTheme
declare module 'styled-components' {
  export type DefaultTheme = Theme | ThemeProps;
}
