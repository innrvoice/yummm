import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { IButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#E5E5E5' }],
    },
  },
} as Meta;

const Template: Story<IButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const TransparentWithBorder = Template.bind({});
export const Loading = Template.bind({});

Default.args = {
  disabled: false,
  loading: false,
  onClick: action('onClick'),
  width: 160,
  color: 'blue',
};

Disabled.args = {
  disabled: true,
  loading: false,
  width: 160,
  color: 'blue',
};

TransparentWithBorder.args = {
  disabled: false,
  loading: false,
  width: 160,
  onClick: action('onClick'),
  color: 'transparent-white',
  border: true,
};

Loading.args = {
  disabled: false,
  loading: true,
  width: 160,
  color: 'blue',
};

const wideContainerDecorator = (Story: Story): React.ReactElement<unknown> => (
  <div style={{ width: 200 }}>
    <Story />
  </div>
);

Default.decorators = [wideContainerDecorator];
Disabled.decorators = [wideContainerDecorator];
TransparentWithBorder.decorators = [wideContainerDecorator];
Loading.decorators = [wideContainerDecorator];
