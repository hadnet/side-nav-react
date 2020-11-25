# Getting started

## Install

`yarn add side-nav-react`

##### then
```js
import {SideNav} from 'side-nav-react';
```

##### Icons

FontAwesome icons (free version) include it for use. You can find its identification names
in [fontawesome.com](https://fontawesome.com/icons?d=gallery). This is
a TypeScript project, so you can use autocomplete too.

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

If you want just a dark/light mode with a custom primary color:

```jsx

<SideNav dark={true} primaryColor="#b0e0e6">
      ...
</SideNav>
```