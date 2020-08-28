import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: ' Primary',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: ' Secondary',
  type: 'secondary',
  vegetable: 'pepper',
};

export const Danger = Template.bind({});
Danger.args = {
  children: ' Danger',
  type: 'danger',
  vegetable: 'pepper',
};

export const IconOnRight = Template.bind({});
IconOnRight.args = {
  children: ' Icon on Right',
  iconSide: 'right',
  vegetable: 'pepper',
};

export const Large = Template.bind({});
Large.args = {
  children: ' Large',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  children: ' Small',
  size: 'small',
};
