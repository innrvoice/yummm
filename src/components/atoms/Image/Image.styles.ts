import { createUseStyles } from 'react-jss';
import { colors } from '../../../theme';
import arrow from '../../../assets/arrow.svg';

export default createUseStyles(
  {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      transformOrigin: 'left left',
    },
    img: {
      maxWidth: '100%',
      maxHeight: '100%',
      transformOrigin: '0px 0px 0px !important',
      position: 'absolute',
      zIndex: 3,
    },
    prev: {
      position: 'absolute',
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: 'white',
      zIndex: 2,
      left: 10,
      backgroundImage: `url(${arrow})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '40%',
      backgroundPosition: '55% center',
      transform: 'rotate(180deg)',
      cursor: 'pointer',
      opacity: 0,
      transition: 'opacity 0.1s ease-in',
      '&:hover': {
        opacity: 1,
      },
    },
    next: {
      position: 'absolute',
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: 'white',
      zIndex: 2,
      right: 10,
      backgroundImage: `url(${arrow})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '40%',
      backgroundPosition: '55% center',
      cursor: 'pointer',
      opacity: 0,
      transition: 'opacity 0.1s ease-in',
      '&:hover': {
        opacity: 1,
      },
    },
    show: {
      opacity: 0.7,
    },
    numberOfImages: {
      position: 'absolute',
      bottom: 10,
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: colors.white,
      padding: [3, 3, 2 , 3],
      fontSize: 11,
      opacity: 0.7,
      zIndex: 1,
      minWidth: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    num: {
      width: '13px',
      textAlign: 'center',
    },

    devider: {
      width: '10px',
      textAlign: 'center',
    },

  },
  { name: 'Image' },
);
