import React, {useState, createContext, useContext} from 'react';
import * as ReactIcons from 'react-icons/fa';
import type {
  Theme,
  SideNavProps,
  SideNavState,
  ItemProps,
  ItemStyleProps,
  ItemGroupProps,
} from './SideNav.types';
import {SideMenu, Title, Content, Item, Frame} from './SideNav.styled';
import {FaTimes} from 'react-icons/fa';
import {ThemeProvider} from 'styled-components';

const OpenContext = createContext<boolean>(false);

const defaultTheme: Theme = {
  dark: {
    primary: '#1c99f3',
    highlight: '#252423',
    sideNavBackground: '#1b1a19',
    textColor: 'white',
  },
  light: {
    primary: '#1a9fff',
    highlight: '#eae9e9',
    sideNavBackground: '#f6f6f6',
    textColor: 'black',
  },
};

function MenuItem({
  children,
  onClick,
  isOpen,
  isMenuOpen,
  active,
  icon,
  bold,
  pivot,
}: ItemStyleProps) {
  const ChosenIcon = icon ? ReactIcons[icon] : undefined;
  return (
    <Item
      id="item"
      isMenuOpen={isMenuOpen}
      hasIcon={icon}
      pivot={pivot}
      bold={bold}
      isOpen={isOpen}
      isActive={!(icon || isMenuOpen) ? false : active}
      onClick={onClick}
    >
      {ChosenIcon && <ChosenIcon id="icon" />}
      <Title pivot={pivot}>{children}</Title>
    </Item>
  );
}

function SideMenuItem(props: ItemProps) {
  const isMenuOpen = useContext(OpenContext);
  const {children, ...rest} = props;
  return (
    <MenuItem isMenuOpen={isMenuOpen} {...rest}>
      {children}
    </MenuItem>
  );
}

function SideMenuItemGroup({title = 'My Group Title', children}: ItemGroupProps) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div id="subitem">
      <MenuItem isOpen={isOpen} icon="FaChevronRight" onClick={() => setOpen(!isOpen)}>
        {title}
      </MenuItem>
      <Content id="content" isOpen={isOpen}>
        {children}
      </Content>
    </div>
  );
}

/**
 * A side nav (also called "left nav" or "navigation pane")
 * provide links to the main areas of an app or a site.
 */
export class SideNav extends React.Component<SideNavProps, SideNavState> {
  state = {
    isOpen: false,
  };
  setOpen = () => this.setState((s) => ({isOpen: !s.isOpen}));
  static Item = SideMenuItem;
  static ItemGroup = SideMenuItemGroup;
  static defaultProps = {
    contextTitle: '',
  };
  render() {
    const {isOpen} = this.state;
    const {contextTitle, theme, dark, primaryColor} = this.props;
    if (primaryColor) {
      defaultTheme.light.primary = primaryColor;
      defaultTheme.dark.primary = primaryColor;
    }
    return (
      <ThemeProvider theme={theme ? theme : dark ? defaultTheme.dark : defaultTheme.light}>
        <SideMenu isOpen={isOpen}>
          <OpenContext.Provider value={isOpen}>
            <MenuItem pivot bold isOpen={isOpen} icon="FaBars" onClick={this.setOpen}>
              <Frame isOpen={isOpen}>
                <FaTimes />
              </Frame>
              {contextTitle}
            </MenuItem>
            {this.props.children}
          </OpenContext.Provider>
        </SideMenu>
      </ThemeProvider>
    );
  }
}
