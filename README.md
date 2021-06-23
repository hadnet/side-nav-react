[![Depfu](https://badges.depfu.com/badges/c010dc1013dd3555e8f300d113513146/overview.svg)](https://depfu.com/github/hadnet/side-nav-react?project_id=17982)
[![HitCount](http://hits.dwyl.com/hadnet/side-nav-react.svg)](http://hits.dwyl.com/hadnet/side-nav-react)
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

```tsx
import {SideNav} from 'side-nav-react';
import {useState} from "react";

export default function App() {
  const [page, setPage] = useState<string>('one');
  return (
    <>
      <div style={{position: 'absolute'}}>
        <SideNav>
          <SideNav.Item icon="FaBitcoin" active={page === 'one'} onClick={() => setPage('one')}>
            Option 1
          </SideNav.Item>
          <SideNav.Item icon="FaBitcoin" active={page === 'two'} onClick={() => setPage('two')}>
            Option 2
          </SideNav.Item>
          <SideNav.ItemGroup title="Group 1">
            <SideNav.Item onClick={() => setPage('G1 sub1')}>
              Sub 1
            </SideNav.Item>
            <SideNav.Item onClick={() => setPage('G1 sub2')}>Sub 2</SideNav.Item>
          </SideNav.ItemGroup>
          <SideNav.ItemGroup title="Group 2">
            <SideNav.Item onClick={() => setPage('G2 sub1')}>
              Sub 1
            </SideNav.Item>
            <SideNav.Item onClick={() => setPage('G2 sub2')}>
              Sub 2
            </SideNav.Item>
          </SideNav.ItemGroup>
          <SideNav.Item icon="FaBitcoin" active={page === 'three'} onClick={() => setPage('three')}>Option 3</SideNav.Item>
          <SideNav.Item icon="FaBitcoin" active={page === 'four'} onClick={() => setPage('four')}>Option 4</SideNav.Item>
        </SideNav>
      </div>
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }}>{page}</div>
    </>
  );
}
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

#### Storybook

`yarn storybook`