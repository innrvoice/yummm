import * as React from 'react';
import useStyles from './Post.styles';
import { Image, Player, Icon } from '../../atoms';
import { Rater } from '../';
import { Loader } from '../../atoms';
import cx from 'clsx';

export interface IPostProps {
  type: 'images' | 'video' | 'audio' | 'link';
  width?: string;
  urls: string[];
  title?: string;
  description?: string;
  linkTitle?: string;
  linkUrl?: string;
  linkIcon?: string;
  commentsNum?: number;
  handleLinkClick?: () => void | Promise<void>;
  handlePlayStart?: () => void;
  isPlaying?: boolean;
}

const Post: React.FC<IPostProps> = ({
  type,
  urls,
  title,
  description,
  width = '300px',
  linkTitle,
  linkIcon,
  handleLinkClick,
  handlePlayStart,
  commentsNum,
  isPlaying,
}) => {
  const classes = useStyles({ linkIcon });

  return (
    <div className={classes.root} style={{ width }}>
      <div
        className={cx(classes.asset)}
        style={{ width, height: width }}
        onClick={handleLinkClick ? handleLinkClick : undefined}
      >
        {(type === 'images' || type === 'link') && (
          <Image urls={urls} width={width} />
        )}
        {(type === 'video' || type === 'audio') && <Player url={urls[0]} handlePlayStart={handlePlayStart} isPlaying={isPlaying} />}
        <div className={classes.rater}>
          <Rater
            winningTaste="lol"
            tastesStats={{ lol: '100', surprised: '1000', angry: '1K' }}
          />
        </div>
        <div className={classes.loader}>
          <Loader />
        </div>
        {type === 'link' && (
          <div className={classes.linkWrap}>
            <div className={classes.linkImage} />
            <div className={classes.linkTitle}>{linkTitle}</div>
            <div className={classes.linkGoto} />
          </div>
        )}
      </div>
      {title && <div className={classes.title}>{title}</div>}
      {description && <div className={classes.description}>{description}</div>}
      <a className={classes.link} href="comments#" target="_blank">
        <div className={classes.commentsWrap}>
          <div className={classes.commentsIcon}>
            <Icon type="comment" />
          </div>
          <div className={classes.commentsNum}>
            {commentsNum ? commentsNum : '0'}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Post;
