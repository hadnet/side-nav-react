import styled, {css} from 'styled-components';
import type {StyledTheme} from './SideNav.types';

const SIDE_MENU_WIDTH = 213;

const HIDDEN_CONTENT = css`
  position: absolute;
  opacity: 0;
  z-index: -100;
  top: 16px;
`;

const PIVOT_TITLE = css`
  position: absolute;
  display: flex;
  top: 16px;
  left: 0;
`;

const Title = styled.span<{pivot?: boolean} & StyledTheme>`
  display: inline-block;
  ${(props) => (props.pivot ? PIVOT_TITLE : null)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-direction: row;
  margin-left: 16px;
  padding-right: 16px;
  opacity: 0;
`;

const ITEM_HIGHLIGHT = css`
  ::before {
    position: absolute;
    margin-left: -16px;
    height: 48px;
    content: '';
    border-left: 2px solid ${(props) => props.theme.primary};
  }
  cursor: pointer;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.highlight};
`;

const PIVOT_HIGHLIGHT = css`
  cursor: pointer;
  background-color: ${(props) => props.theme.highlight};
`;

const Frame = styled.div<{isOpen?: boolean}>`
  margin-right: 16px;
  ${(props) =>
    props.isOpen
      ? css`
          transform: rotate(90deg);
          transition: all 0.2s ease-in-out;
        `
      : css`
          transform: rotate(0deg);
          transition: all 0.2s ease-in-out;
        `}
`;

const Content = styled.div<{isOpen: boolean} & StyledTheme>`
  ${(props) =>
    props.isOpen
      ? css`
          position: relative;
          z-index: 0;
          opacity: 1;
          transition: opacity 0.8s ease;
          & #item {
            padding-left: 32px;
            ::before {
              border-left: none;
            }
          }
        `
      : css`
          ${HIDDEN_CONTENT};
        `}
`;

const SideMenu = styled.div<{isOpen: boolean} & StyledTheme>`
  position: relative;
  overflow: hidden;
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  width: 48px;
  height: 100vh;
  background-color: ${(props) => props.theme.sideNavBackground};
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.isOpen
      ? css`
          width: ${SIDE_MENU_WIDTH}px;
          & span {
            transition: opacity 0.2s ease-in-out;
            opacity: 1;
          }
          & #close {
            background-color: transparent;
            border-radius: 100%;
            transition: all 0.2s ease-in-out;
          }
        `
      : css`
          & #content {
            ${HIDDEN_CONTENT};
          }
          & #subitem {
            ${HIDDEN_CONTENT};
          }
        `}
`;

const Item = styled.div<
  {
    isOpen?: boolean;
    isMenuOpen?: boolean;
    isActive?: boolean;
    bold?: boolean;
    pivot?: boolean;
    hasIcon?: string;
  } & StyledTheme
>`
  user-select: none;
  overflow: hidden;
  position: relative;
  color: ${(props) => props.theme.textColor};
  display: flex;
  padding-left: 16px;
  align-items: center;
  height: 48px;
  width: ${SIDE_MENU_WIDTH}px;
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  font-weight: ${(props) => (props.bold ? 'bold' : 200)};
  transition: all 0.1s ease-in-out;
  :hover {
    ${(props) =>
      props.pivot
        ? PIVOT_HIGHLIGHT
        : props.hasIcon
        ? ITEM_HIGHLIGHT
        : props.isMenuOpen
        ? ITEM_HIGHLIGHT
        : ''};
  }
  ${(props) =>
    props.isOpen || props.isActive
      ? css`
          & #icon {
            transform: ${props.isActive ? `none` : `rotate(90deg)`};
            opacity: ${props.pivot ? 0 : 1};
            transition: all 0.2s ease-in-out;
          }
          ${!props.pivot ? ITEM_HIGHLIGHT : `:hover {background-color: transparent`}
        `
      : props.hasIcon || props.isMenuOpen
      ? css`
          & #icon {
            transform: rotate(0deg);
            transition: all 0.2s ease-in-out;
          }
          ::before {
            display: none;
          }
          color: ${(props) => props.theme.textColor};
          background-color: transparent;
        `
      : css`
          display: none;
        `};
`;

export {SideMenu, Item, Title, Content, Frame};
