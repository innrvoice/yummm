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
      width: (props: INeededProps) => props.enlargedSize ? 55 : 45,
      height: (props: INeededProps) => props.enlargedSize ? 55 : 45,
      borderRadius: '50%',
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightGrey} 100%)`,
      backgroundSize: '100%',
      backgroundPosition: 'center center',
    },
    hoverLol: {
      transform: 'scale(1)',
      transition: 'scale 0.1s ease-in',
      '&:hover': {
        border: `4px solid ${colors.orange}`,
        transform: 'scale(1.04)',
      },
    },
    hoverLove: {
      transform: 'scale(1)',
      transition: 'scale 0.1s ease-in',
      '&:hover': {
        border: `4px solid ${colors.purple}`,
        transform: 'scale(1.04)',
      },
    },
    hoverAngry: {
      transform: 'scale(1)',
      transition: 'all 0.1s ease-in',
      '&:hover': {
        border: `4px solid ${colors.red}`,
        transform: 'scale(1.04)',
      },
    },
    hoverSad: {
      transform: 'scale(1)',
      transition: 'all 0.1s ease-in',
      '&:hover': {
        border: `4px solid ${colors.blue}`,
        transform: 'scale(1.04)',
      },
    },
    hoverDizzy: {
      transform: 'scale(1)',
      transition: 'all 0.1s ease-in',
      '&:hover': {
        border: `4px solid ${colors.violet}`,
        transform: 'scale(1.04)',
      },
    },
    hoverSurprised: {
      transform: 'scale(1)',
      transition: 'all 0.1s ease-in',
      '&:hover': {
        border: `4px solid ${colors.lime}`,
        transform: 'scale(1.04)',
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
    tasteLolBg: {
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightOrange} 100%)`,
    },
    tasteLoveBg: {
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightPurple} 100%)`,
    },
    tasteAngryBg: {
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightRed} 100%)`,
    },
    tasteSadBg: {
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightBlue} 100%)`,
    },
    tasteDizzyBg: {
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightViolet} 100%)`,
    },
    tasteSurprisedBg: {
      backgroundImage: `linear-gradient(top, rgba(255,255,255, 0) 20%, ${colors.lightLime} 100%)`,
    },
    taste: {
      width: '100%',
      height: '100%',
      backgroundSize: '100%',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      filter: (props: INeededProps) => props.tasteGrayscale ? 'grayscale(100%)' : 'grayscale(0)',
    },
    tasteLol: {
      '&:hover': {
        animation: '$jiggle 1s 2 ease-in',
        transformOrigin: 'center center 0',
        filter: 'grayscale(0)',
      },
      backgroundImage: `url(${lol})`,
    },
    tasteLove: {
      '&:hover': {
        animation: '$jiggle 0.5s 2 ease-in',
        transformOrigin: 'center center 0',
        filter: 'grayscale(0)',
      },
      backgroundImage: `url(${love})`,
    },
    tasteAngry: {
      '&:hover': {
        animation: '$jiggle 0.5s 2 ease-in',
        transformOrigin: 'center center 0',
        filter: 'grayscale(0)',
      },
      backgroundImage: `url(${angry})`,
    },
    tasteSad: {
      '&:hover': {
        animation: '$jiggle 0.5s 2 ease-in',
        transformOrigin: 'center center 0',
        filter: 'grayscale(0)',
      },
      backgroundImage: `url(${sad})`,
    },
    tasteDizzy: {
      '&:hover': {
        animation: '$jiggle 0.5s 2 ease-in',
        transformOrigin: 'center center 0',
        filter: 'grayscale(0)',
      },
      backgroundImage: `url(${dizzy})`,
    },
    tasteSurprised: {
      '&:hover': {
        animation: '$jiggle 0.5s 2 ease-in',
        transformOrigin: 'center center 0',
        filter: 'grayscale(0)',
      },
      backgroundImage: `url(${surprised})`,
    },
    tasteLolBorder: {
      border: (props: INeededProps) => props.borderBig ? `4px solid ${colors.orange}` : `1px solid ${colors.orange}`,
    },
    tasteLoveBorder: {
      border: (props: INeededProps) => props.borderBig ? `4px solid ${colors.purple}` : `1px solid ${colors.purple}`,
    },
    tasteAngryBorder: {
      border: (props: INeededProps) => props.borderBig ? `4px solid ${colors.red}` : `1px solid ${colors.red}`,
    },
    tasteSadBorder: {
      border: (props: INeededProps) => props.borderBig ? `4px solid ${colors.blue}` : `1px solid ${colors.blue}`,
    },
    tasteDizzyBorder: {
      border: (props: INeededProps) => props.borderBig ? `4px solid ${colors.violet}` : `1px solid ${colors.violet}`,
    },
    tasteSurprisedBorder: {
      border: (props: INeededProps) => props.borderBig ? `4px solid ${colors.lime}` : `1px solid ${colors.lime}`,
    },
  },
  { name: 'Taste' },
);
