import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {SideNav} from '../components/SideNav';
import type {SideNavProps} from '../components/SideNav.types';

const Item = SideNav.Item;
const ItemGroup = SideNav.ItemGroup;
export default {
  title: 'SideNav/SideNavCSF',
  component: SideNav,
  subcomponents: {
    Item,
    ItemGroup,
  },
  argTypes: {
    theme: {
      description: 'An object with a shape of:',
      table: {
        defaultValue: {
          summary: 'object',
          detail: `
{
  primary: '#1c99f3',
  highlight: '#252423',
  sideNavBackground: '#1b1a19',
  textColor: 'white',
}
`,
        },
        type: {
          summary: 'ThemeProps',
          detail: `
{
  primary: string,
  highlight: string,
  sideNavBackground: string,
  textColor: string,
}
`,
        },
      },
      control: {
        type: 'text',
      },
    },
    contextTitle: {
      description: 'Title for the hamburger menu button',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const Template: Story<SideNavProps> = (args) => {
  return (
    <SideNav {...args}>
      <SideNav.Item active icon={'FaAd'} onClick={() => console.log('clicked')}>
        First Option
      </SideNav.Item>
      <SideNav.Item icon={`FaBitcoin`}>Bitcoin</SideNav.Item>
      <SideNav.ItemGroup title="Group 1">
        <SideNav.Item>Sub 1</SideNav.Item>
        <SideNav.Item>Sub 2</SideNav.Item>
      </SideNav.ItemGroup>
      <SideNav.ItemGroup title="Group 2">
        <SideNav.Item>Sub 1</SideNav.Item>
        <SideNav.Item>Sub 2</SideNav.Item>
      </SideNav.ItemGroup>
      <SideNav.Item icon={`FaAddressBook`}>Third Option</SideNav.Item>
      <SideNav.Item>Fourth Option</SideNav.Item>
    </SideNav>
  );
};

const TemplateWithoutIcons: Story<SideNavProps> = (args) => {
  return (
    <SideNav {...args}>
      <SideNav.Item onClick={() => console.log('clicked')}>First Option</SideNav.Item>
      <SideNav.Item>Second Option</SideNav.Item>
      <SideNav.ItemGroup title="Group 1">
        <SideNav.Item>Sub 1</SideNav.Item>
        <SideNav.Item>Sub 2</SideNav.Item>
      </SideNav.ItemGroup>
      <SideNav.ItemGroup title="Group 2">
        <SideNav.Item>Sub 1</SideNav.Item>
        <SideNav.Item>Sub 2</SideNav.Item>
      </SideNav.ItemGroup>
      <SideNav.Item>Third Option</SideNav.Item>
      <SideNav.Item>Fourth Option</SideNav.Item>
    </SideNav>
  );
};

const TemplateActive: Story<SideNavProps> = (args) => {
  return (
    <SideNav {...args}>
      <SideNav.Item active onClick={() => console.log('clicked')}>
        First Option
      </SideNav.Item>
      <SideNav.Item>Second Option</SideNav.Item>
      <SideNav.ItemGroup title="Group 1">
        <SideNav.Item>Sub 1</SideNav.Item>
        <SideNav.Item>Sub 2</SideNav.Item>
      </SideNav.ItemGroup>
      <SideNav.ItemGroup title="Group 2">
        <SideNav.Item>Sub 1</SideNav.Item>
        <SideNav.Item>Sub 2</SideNav.Item>
      </SideNav.ItemGroup>
      <SideNav.Item>Third Option</SideNav.Item>
      <SideNav.Item>Fourth Option</SideNav.Item>
    </SideNav>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  // primary: true,
};
export const NoIcons = TemplateWithoutIcons.bind({});
NoIcons.args = {
  // primary: true,
};
NoIcons.parameters = {
  docs: {
    description: {
      story: 'A version with items without icons',
    },
  },
};
export const Active = TemplateActive.bind({});
Active.args = {
  // primary: true,
};
