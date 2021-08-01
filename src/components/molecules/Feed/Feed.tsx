import * as React from 'react';
import useStyles from './Feed.styles';
import useDimensions from 'react-cool-dimensions';
import { Image, Player, Icon } from '../../atoms';
import { Rater } from '..';
import { Loader } from '../../atoms';
import cx from 'clsx';
import { AssetType, ITasteStats, Taste, IPost } from '../../../types';
import { Post } from '../';

export interface IFeedProps {
  posts: IPost[];
}

const MARGIN = 30;

const Feed: React.FC<IFeedProps> = ({ posts }) => {
  const classes = useStyles();
  const [postSizePx, setPostSizePx] = React.useState<null | number>(null);
  const [containerWidthPx, setContainerWidthPx] = React.useState<null | number>(null);
  const { observe, unobserve, width} = useDimensions({
    onResize: ({ width }) => {
      setContainerWidthPx(width + MARGIN);
      if (width > 1280) {
        setPostSizePx(Math.floor((width - MARGIN * 3) / 4));
        console.log('here');

      } else if (width < 1280 && width > 900) {
        setPostSizePx(Math.floor((width - MARGIN * 2) / 3));
      } else if (width < 900 && width > 700) {
        setPostSizePx(Math.floor((width - MARGIN) / 2));
      } else if (width < 700) {
        setPostSizePx(width);
      }
    },
  });

  return (
    <div ref={observe} className={classes.wrap}>
      <div  className={classes.root} style={{ width: containerWidthPx ? containerWidthPx : undefined, marginLeft: `-${MARGIN/2}px`}}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              marginLeft: `${MARGIN / 2}px`,
              marginRight: `${MARGIN / 2}px`,
              // border: '1px solid red',
              // boxSizing: 'border-box',
            }}
          >
            <Post
              type={post.type}
              width={`${postSizePx}px`}
              urls={post.urls}
              title={post.title}
              description={post.description}
              linkTitle={post.linkTitle}
              linkUrl={post.linkUrl}
              linkIcon={post.linkIcon}
              commentsNum={post.commentsNum}
              handleLinkClick={() => console.log('aaaaaaaaaa')}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
