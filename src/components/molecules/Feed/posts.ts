import { IPost } from "../../../types";

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

const stats = {
    lol: '10k',
    dizzy: '111',
    surprised: '500',
}

export const posts: IPost[] = [
  {
    id: 'post1',
    urls: images,
    type: 'images',
    title: 'Some lovely Bulldogs to enjoy!',
    description:
      'I just love hove the look here. I just love hove the look here. I just love hove the look here. ',
    commentsNum: 120,
    winningTaste: 'lol',
    ratedTaste: 'lol',
    tastesStats: stats,
  },
  {
    id: 'post2',
    urls: [images[0]],
    type: 'link',
    title: 'Some lovely Bulldogs to enjoy!',
    description:
      'I just love hove the look here. I just love hove the look here. I just love hove the look here. I just love hove the look here. I just love hove the look here. I just love hove the look here.',
    commentsNum: 150,
    linkTitle: 'CNN.COM',
    linkUrl: 'http://yandex.ru',
    linkIcon: 'https://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Web-CNN-Metro-icon.png',
    winningTaste: 'dizzy',
    tastesStats: stats,
  },
  {
    id: 'post3',
    urls: ['https://www.youtube.com/watch?v=Hqm7rZm26tI'],
    type: 'video',
    title: 'Some lovely Bulldogs to enjoy!',
    description:
      'I just love hove the look here. I just love hove the look here. I just love hove the look here. ',
    commentsNum: 120,
    winningTaste: 'lol',
    ratedTaste: 'lol',
    tastesStats: stats,
  },
  {
    id: 'post4',
    urls: ['https://www.youtube.com/watch?v=Hqm7rZm26tI'],
    type: 'video',
    title: 'Some lovely Bulldogs to enjoy!',
    description:
      'I just love hove the look here. I just love hove the look here. I just love hove the look here. ',
    commentsNum: 120,
    winningTaste: 'lol',
    ratedTaste: 'lol',
    tastesStats: stats,
  },
  {
    id: 'post5',
    urls: images,
    type: 'images',
    title: 'Some lovely Bulldogs to enjoy!',
    description:
      'I just love hove the look here. I just love hove the look here. I just love hove the look here. ',
    commentsNum: 120,
    winningTaste: 'lol',
    ratedTaste: 'lol',
    tastesStats: stats,
  },
];
