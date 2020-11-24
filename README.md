# Getting started with react-side-nav

## Install

`yarn add side-nav-react`

##### import
```js
import {SideNav} from 'side-nav-react';
```

##### Icons

FontAwesome icon (free version) include it for use. You can find its identification names
in [fontawesome.com](https://fontawesome.com/icons?d=gallery)


##### Example

```jsx
<SideNav>
      <SideNav.Item icon="FaBitcoin" active onClick={() => console.log('clicked')}>
        Option 1
      </SideNav.Item>
      <SideNav.Item icon="FaBitcoin">Option 2</SideNav.Item>
      <SideNav.ItemGroup title="Group 1">
        <SideNav.Item>Sub 1</SideNav.Item>
        <SideNav.Item>Sub 2</SideNav.Item>
      </SideNav.ItemGroup>
      <SideNav.ItemGroup title="Group 2">
        <SideNav.Item>Sub 1</SideNav.Item>
        <SideNav.Item>Sub 2</SideNav.Item>
      </SideNav.ItemGroup>
      <SideNav.Item icon="FaBitcoin">Option 3</SideNav.Item>
      <SideNav.Item icon="FaBitcoin">Option 4</SideNav.Item>
    </SideNav>
```
#### Theme

You can custom with your own theme:

```jsx
const myTheme = {
  primary: '#1c99f3',
  highlight: '#252423',
  sideNavBackground: '#1b1a19',
  textColor: 'white',
}
<SideNav theme={myTheme}>
      <SideNav.Item icon="FaBitcoin" active onClick={() => console.log('clicked')}>
        Option 1
      </SideNav.Item>
      <SideNav.Item icon="FaBitcoin">Option 2</SideNav.Item>
      <SideNav.ItemGroup title="Group 1">
        <SideNav.Item>Sub 1</SideNav.Item>
        <SideNav.Item>Sub 2</SideNav.Item>
      </SideNav.ItemGroup>
      <SideNav.ItemGroup title="Group 2">
        <SideNav.Item>Sub 1</SideNav.Item>
        <SideNav.Item>Sub 2</SideNav.Item>
      </SideNav.ItemGroup>
      <SideNav.Item icon="FaBitcoin">Option 3</SideNav.Item>
      <SideNav.Item icon="FaBitcoin">Option 4</SideNav.Item>
    </SideNav>
```
