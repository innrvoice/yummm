import * as React from 'react';
import { Story, Meta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Loader, { ILoaderProps } from './Loader';

export default {
  title: 'Atoms/Loader',
  component: Loader,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#111' }],
    },
  },
} as Meta;

const Template: Story<ILoaderProps> = (args) => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {
  timesToRotate: '2',
};

const wideContainerDecorator = (Story: Story): React.ReactElement<unknown> => (
  <div
    style={{
      width: 32,
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid green',
    }}
  >
    <Story />
  </div>
);

Default.decorators = [wideContainerDecorator];
