import { colors } from '../../../theme';
import { createUseStyles } from 'react-jss';
import lol from '../../../assets/tastes/lol.svg';
import love from '../../../assets/tastes/love.svg';
import angry from '../../../assets/tastes/angry.svg';
import sad from '../../../assets/tastes/sad.svg';
import dizzy from '../../../assets/tastes/dizzy.svg';
import surprised from '../../../assets/tastes/surprised.svg';

interface INeededProps {
  borderBig?: boolean;
  enlargedSize?: boolean;
  tasteGrayscale?: boolean;
}

export default createUseStyles<string, INeededProps>(
  {
    root: {
      color: colors.black,
      border: `1px solid ${colors.grey}`,
      width: (props: INeededProps) => props.enlargedSize ? 50 : 40,
      height: (props: INeededProps) => props.enlargedSize ? 50 : 40,
      borderRadius: '50%',
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightGrey} 100%)`,
      backgroundSize: '100%',
      backgroundPosition: 'center center',
    },
    hoverLol: {
      '&:hover': {
        border: `4px solid ${colors.orange}`,
      },
    },
    hoverLove: {
      '&:hover': {
        border: `4px solid ${colors.purple}`,
      },
    },
    hoverAngry: {
      '&:hover': {
        border: `4px solid ${colors.red}`,
      },
    },
    hoverSad: {
      '&:hover': {
        border: `4px solid ${colors.blue}`,
      },
    },
    hoverDizzy: {
      '&:hover': {
        border: `4px solid ${colors.violet}`,
      },
    },
    hoverSurprised: {
      '&:hover': {
        border: `4px solid ${colors.lime}`,
      },
    },
    '@keyframes jiggle': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '33%': {
        transform: 'rotate(-4deg)',
      },
      '66%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(4deg)',
      },
    },
    taste1bg: {
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightOrange} 100%)`,
    },
    taste2bg: {
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightPurple} 100%)`,
    },
    taste3bg: {
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightRed} 100%)`,
    },
    taste4bg: {
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightBlue} 100%)`,
    },
    taste5bg: {
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightViolet} 100%)`,
    },
    taste6bg: {
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightLime} 100%)`,
    },
    taste: {
      width: '100%',
      height: '100%',
      backgroundSize: '100%',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      filter: (props: INeededProps) => props.tasteGrayscale ? 'grayscale(100%)' : 'grascale(0)',
    },
    taste1: {
      '&:hover': {
        animation: '$jiggle 1s 2 ease-in',
        transformOrigin: 'center center 0',
      },
      backgroundImage: `url(${lol})`,
    },
    taste2: {
      '&:hover': {
        animation: '$jiggle 0.5s 2 ease-in',
        transformOrigin: 'center center 0',
      },
      backgroundImage: `url(${love})`,
    },
    taste3: {
      '&:hover': {
        animation: '$jiggle 0.5s 2 ease-in',
        transformOrigin: 'center center 0',
      },
      backgroundImage: `url(${angry})`,
    },
    taste4: {
      '&:hover': {
        animation: '$jiggle 0.5s 2 ease-in',
        transformOrigin: 'center center 0',
      },
      backgroundImage: `url(${sad})`,
    },
    taste5: {
      '&:hover': {
        animation: '$jiggle 0.5s 2 ease-in',
        transformOrigin: 'center center 0',
      },
      backgroundImage: `url(${dizzy})`,
    },
    taste6: {
      '&:hover': {
        animation: '$jiggle 0.5s 2 ease-in',
        transformOrigin: 'center center 0',
        filter: 'grayscale(0)',
        border: `1px solid ${colors.lime}`,
      },
      backgroundImage: `url(${surprised})`,
    },
    taste1border: {
      border: (props: INeededProps) => props.borderBig ? `4px solid ${colors.orange}` : `1px solid ${colors.orange}`,
    },
    taste2border: {
      border: (props: INeededProps) => props.borderBig ? `4px solid ${colors.purple}` : `1px solid ${colors.purple}`,
    },
    taste3border: {
      border: (props: INeededProps) => props.borderBig ? `4px solid ${colors.red}` : `1px solid ${colors.red}`,
    },
    taste4border: {
      border: (props: INeededProps) => props.borderBig ? `4px solid ${colors.blue}` : `1px solid ${colors.blue}`,
    },
    taste5border: {
      border: (props: INeededProps) => props.borderBig ? `4px solid ${colors.violet}` : `1px solid ${colors.violet}`,
    },
    taste6border: {
      border: (props: INeededProps) => props.borderBig ? `4px solid ${colors.lime}` : `1px solid ${colors.lime}`,
    },
  },
  { name: 'Taste' },
);
