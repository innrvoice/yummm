import * as React from 'react';
import { Story, Meta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Player, { IPlayerProps } from './Player';

export default {
  title: 'Atoms/Player',
  component: Player,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#111' }],
    },
  },
} as Meta;

const Template: Story<IPlayerProps> = (args) => (
  <Player {...args} />
);

export const Default = Template.bind({});

Default.args = {
  url: 'https://www.youtube.com/watch?v=Hqm7rZm26tI',
};


const wideContainerDecorator = (Story: Story): React.ReactElement<unknown> => (
  <div style={{ width: 400, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <Story />
  </div>
);

Default.decorators = [wideContainerDecorator];
