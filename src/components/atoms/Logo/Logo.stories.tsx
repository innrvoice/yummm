import * as React from 'react';
import { Story, Meta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Logo, { ILogoProps } from './Logo';
import Logo2 from './Logo2';

export default {
  title: 'Atoms/Logo',
  component: Logo2,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#000' }],
    },
  },
} as Meta;

const Template: Story<ILogoProps> = (args) => <Logo {...args} />;
const Template2: Story<ILogoProps> = (args) => <Logo2 {...args} />;

export const Default = Template.bind({});
export const Alt = Template2.bind({});

Default.args = {
  loading: false,
  animationDuration: 0.5,
};

Alt.args = {
  loading: false,
  animationDuration: 0.5,
};

const wideContainerDecorator = (Story: Story): React.ReactElement<unknown> => (
      <Story />
);

Default.decorators = [wideContainerDecorator];
Alt.decorators = [wideContainerDecorator];
