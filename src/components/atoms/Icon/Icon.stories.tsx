import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon, { IIconProps } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#222' }],
    },
  },
} as Meta;

const Template: Story<IIconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'comment',
};

Default.decorators = [
  (Story): React.ReactElement<unknown> => (
    <div style={{ width: 150 }}>
      <Story />
    </div>
  ),
];
