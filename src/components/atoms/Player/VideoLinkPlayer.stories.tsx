import * as React from 'react';
import { Story, Meta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import VideoLinkPlayer, { IVideoLinkPlayerProps } from './VideoLinkPlayer';

export default {
  title: 'Atoms/VideoLinkPlayer',
  component: VideoLinkPlayer,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#111' }],
    },
  },
} as Meta;

const Template: Story<IVideoLinkPlayerProps> = (args) => (
  <VideoLinkPlayer {...args} />
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
