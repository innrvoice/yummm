import * as React from 'react';
import { Story, Meta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Post, { IPostProps } from './Post';

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
  title: 'Molecules/Post',
  component: Post,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#222' }],
    },
  },
} as Meta;

const Template: Story<IPostProps> = (args) => <Post {...args} />;

export const Images = Template.bind({});

Images.args = {
  urls: images,
  width: '350px',
  type: 'images',
  title: 'Some lovely Bulldogs to enjoy!',
  description:
    'I just love hove the look here. I just love hove the look here. I just love hove the look here. ',
};

export const Video = Template.bind({});

Video.args = {
  urls: ['https://www.youtube.com/watch?v=Hqm7rZm26tI'],

  width: '350px',
  type: 'video',
  title: 'Some lovely Bulldogs to enjoy!',
  description:
    'I just love hove the look here. I just love hove the look here. I just love hove the look here. ',
};

export const Link = Template.bind({});

Link.args = {
  urls: [images[0]],
  width: '350px',
  type: 'link',
  linkTitle: 'CNN.COM',
  linkUrl: 'http://yandex.ru',
  linkIcon: 'https://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Web-CNN-Metro-icon.png',
  title: 'Some lovely Bulldogs to enjoy!',
  description:
    'I just love hove the look here. I just love hove the look here. I just love hove the look here. ',
  handleLinkClick: () => console.log('goto link'),
};


const wideContainerDecorator = (Story: Story): React.ReactElement<unknown> => (
  <div>
    <Story />
  </div>
);

Images.decorators = [wideContainerDecorator];
Video.decorators = [wideContainerDecorator];
Link.decorators = [wideContainerDecorator];
