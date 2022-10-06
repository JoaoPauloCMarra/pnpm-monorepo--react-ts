import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button';

export default {
  title: 'Button',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    active: {
      control: { type: 'boolean' },
    },
    activeBg: {
      control: { type: 'text' },
    },
    activeBorder: {
      control: { type: 'text' },
    },
    activeColor: {
      control: { type: 'text' },
    },
    bg: {
      control: { type: 'text' },
    },
    border: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Sample Button',
  size: 'md',
  disabled: false,
  active: false,
  activeBg: 'white',
  activeBorder: 'black',
  activeColor: 'black',
  bg: 'black',
  border: 'black',
  color: 'white',
};
