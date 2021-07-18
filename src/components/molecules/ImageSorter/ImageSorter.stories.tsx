import * as React from 'react';
import { Story, Meta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import ImageSorter, { IImageSorterProps } from './ImageSorter';

export default {
  title: 'Molecules/ImageSorter',
  component: ImageSorter,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#111' }],
    },
  },
} as Meta;

const images = [
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/21010129/Bulldog-Slide-02.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06014341/bulldog-asleep-on-couch-tongue-out.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/01144812/Bulldog-at-the-AKC-National-Championship.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06014350/bulldog-looking-up-portrait-closeup.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234013/Bulldog.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06014400/bulldog-on-skateboard-grinning.jpg',
];

const Template: Story<IImageSorterProps> = (args) => <ImageSorter {...args} />;

export const Default = Template.bind({});

Default.args = {
  images,
};

const wideContainerDecorator = (Story: Story): React.ReactElement<unknown> => (
  <div
    style={{
      width: 500,
      height: 500,
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
