import React from 'react';
import * as ReactIcons from 'react-icons/fa';
import {DefaultTheme} from 'styled-components';

export type StyledTheme = {
  theme: DefaultTheme;
};

export interface ThemeProps {
  textColor: string;
  primary: string;
  sideNavBackground: string;
  highlight: string;
}

export interface Theme {
  light: ThemeProps;
  dark: ThemeProps;
}

export interface SideNavProps {
  /**
   *  Title for the hamburger menu button
   */
  contextTitle?: string;
  /**
   * A theme object
   */
  theme?: ThemeProps;
  /**
   *  Enable dark mode
   */
  dark?: boolean;
  /**
   *  Primary color
   */
  primaryColor?: string;
}

export interface SideNavState {
  isOpen: boolean;
}

export type ItemGroupProps = React.PropsWithChildren<{
  /**
   *  A title for the group of items
   */
  title?: string;
}>;

export type ItemProps = React.PropsWithChildren<{
  /**
   * It applies a selected style when `true`.
   */
  active?: boolean;
  /**
   * A Font Awesome icon for the item.
   */
  icon?: keyof typeof ReactIcons;
  /**
   * Bold style for the children text.
   */
  bold?: boolean;
  /**
   * A click mouse event function
   * @param e
   */
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}>;

export type ItemStyleProps = ItemProps & {
  isOpen?: boolean;
  isMenuOpen?: boolean;
  pivot?: boolean;
};
