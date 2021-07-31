import { createUseStyles } from 'react-jss';
import { colors } from '../../../theme';
import gotolink from '../../../assets/openlink.svg';

interface INeededProps {
  linkIcon?: string;
}

export default createUseStyles(
  {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: 22,
      color: colors.white,
      marginTop: 25,
      marginRight: 60,
      opacity: 0.7,
    },
    description: {
      marginTop: 15,
      fontSize: 16,
      lineHeight: 1.5,
      color: colors.white,
      marginRight: 60,
    },
    asset: {
      position: 'relative',
      // borderRadius: 9,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      border: '1px solid #333',
      '&:hover $linkGoto': {

        backgroundImage: `url(${gotolink})`,
        backgroundColor: 'rgba(0,0,0, 0.7)',
        opacity: 0.9,
      },
      cursor: 'pointer',
    },
    rater: {
      position: 'absolute',
      zIndex: 5,
      right: 20,
      bottom: 0,
      transform: 'translateY(50%)',
    },

    loader: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate3d(-50%, -50%, 0)',
      width: 30,
      height: 30,
      opacity: 0.4,
      zIndex: 0,
    },

    linkWrap: {
      position: 'absolute',
      left: 10,
      bottom: 10,
      display: 'flex',
      alignItems: 'center',
      pointerEvents: 'none',
      zIndex: 3,
    },

    linkImage: {
      width: 20,
      height: 20,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundImage: (props: INeededProps) => props.linkIcon && `url(${props.linkIcon})`,
    },

    linkTitle: {
      fontSize: 10,
      color: colors.white,
      opacity: 0.7,
      padding: [0, 5],
      backgroundColor: 'rgba(0,0,0, 0.7)',
      height: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    linkGoto: {
      width: 16,
      height: 20,
      backgroundSize: '90%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left center',
      backgroundImage: `url(${gotolink})`,
      opacity: 0,
      transition: 'opacity 0.1s ease-in',
    },

    commentsWrap: {
      color: colors.white,
      fontSize: 14,
      marginTop: 15,
      display: 'flex',
      alignItems: 'center',
    },

    commentsNum: {
      marginLeft: 5,
    },

    commentsIcon: {
      width: 16,
      height: 16,
      marginTop: 3,
      color: colors.red,
    },

    link: {
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
  { name: 'Post' },
);
