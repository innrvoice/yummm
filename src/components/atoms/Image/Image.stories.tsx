import * as React from 'react';
import { Story, Meta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Image, { IImageProps } from './Image';

const images = [
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/21010129/Bulldog-Slide-02.jpg',
  'https://images.unsplash.com/photo-1554266183-2696fdafe3ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG93bmxvYWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/21010129/Bulldog-Slide-02.jpg',
  'https://images.unsplash.com/photo-1554266183-2696fdafe3ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG93bmxvYWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/21010129/Bulldog-Slide-02.jpg',
  'https://images.unsplash.com/photo-1554266183-2696fdafe3ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG93bmxvYWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/21010129/Bulldog-Slide-02.jpg',
  'https://images.unsplash.com/photo-1554266183-2696fdafe3ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG93bmxvYWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
];

export default {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#111' }],
    },
  },
} as Meta;

const Template: Story<IImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  urls: images,
  width: '300px',
};

const wideContainerDecorator = (Story: Story): React.ReactElement<unknown> => (
      <Story />
);

Default.decorators = [wideContainerDecorator];
