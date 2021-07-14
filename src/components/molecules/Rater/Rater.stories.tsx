import * as React from 'react';
import { Story, Meta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Rater, { IRaterProps } from './Rater';

export default {
  title: 'Molecules/Rater',
  component: Rater,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#111' }],
    },
  },
} as Meta;

const Template: Story<IRaterProps> = (args) => (
  <Rater {...args} />
);

export const Default = Template.bind({});

Default.args = {
  winningTaste: 'angry',
  tastesStats: { love: '10.1K', angry: '1.1M', dizzy: '50', lol: '100K' }
};


const wideContainerDecorator = (Story: Story): React.ReactElement<unknown> => (
  <div style={{ width: 500, height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid green'}}>
    <Story />
  </div>
);

Default.decorators = [wideContainerDecorator];
