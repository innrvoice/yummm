import * as React from 'react';
import { Story, Meta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Feed, { IFeedProps } from './Feed';
import { posts } from './posts';



export default {
  title: 'Molecules/Feed',
  component: Feed,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#222' }],
    },
  },
} as Meta;

const Template: Story<IFeedProps> = (args) => <Feed {...args} />;

export const Default = Template.bind({});

Default.args = {
  posts,
};

const wideContainerDecorator = (Story: Story): React.ReactElement<unknown> => (
  <div>
    <Story />
  </div>
);

Default.decorators = [wideContainerDecorator];

