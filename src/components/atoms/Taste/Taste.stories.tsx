import * as React from 'react';
import { Story, Meta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Taste, { ITasteProps } from './Taste';

export default {
  title: 'Atoms/Taste',
  component: Taste,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#111' }],
    },
  },
} as Meta;

const Template: Story<ITasteProps> = (args) => (
  <Taste {...args} />
);

export const Default = Template.bind({});

Default.args = {
  taste: 'angry',
};


const wideContainerDecorator = (Story: Story): React.ReactElement<unknown> => (
  <div style={{ width: 200, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid green'}}>
    <Story />
  </div>
);

Default.decorators = [wideContainerDecorator];
