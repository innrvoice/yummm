import { colors } from '../../../theme';
import { createUseStyles } from 'react-jss';
// import lol from '../../../assets/tastes/lol.svg';
// import love from '../../../assets/tastes/love.svg';
// import angry from '../../../assets/tastes/angry.svg';
// import sad from '../../../assets/tastes/sad.svg';
// import dizzy from '../../../assets/tastes/dizzy.svg';
// import surprised from '../../../assets/tastes/surprised.svg';

// interface INeededProps {
//   borderBig?: boolean;
//   enlargedSize?: boolean;
//   tasteGrayscale?: boolean;
// }

export default createUseStyles(
  {
    root: {
      color: colors.black,
      border: `1px solid ${colors.grey}`,
      width: '160px',
      height: '160px',
      position: 'relative',
    },
    tasteWrap: {
      position: 'absolute',
      right: '50%',
      top: '50%',
      width: 55,
      height: 55,
      transform: 'translate3d(50%, -50%, 0)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all 0.1s ease-in',
    },
    transparent: {
      opacity: 0,
    },
    flyLol: {
      opacity: 1,
      transform: 'rotate(90deg) translateX(-85px) rotate(-90deg) translateY(-50%) translateX(50%)',
      transition: 'all 0.1s ease-in',
    },
    flyLove: {
      opacity: 1,
      transform: 'rotate(54deg) translateX(-85px) rotate(-54deg) translateY(-50%) translateX(50%)',
      transition: 'all 0.1s ease-in',
    },
    flyAngry:  {
      opacity: 1,
      transform: 'rotate(18deg) translateX(-85px) rotate(-18deg) translateY(-50%) translateX(50%)',
      transition: 'all 0.1s ease-in',
    },
    flySad: {
      opacity: 1,
      transform: 'rotate(-18deg) translateX(-85px) rotate(18deg) translateY(-50%) translateX(50%)',
      transition: 'all 0.1s ease-in',
    },
    flyDizzy: {
      opacity: 1,
      transform: 'rotate(-54deg) translateX(-85px) rotate(54deg) translateY(-50%) translateX(50%)',
      transition: 'all 0.1s ease-in',
    },

    flySurprised: {
      opacity: 1,
      transform: 'rotate(-90deg) translateX(-85px) rotate(90deg) translateY(-50%) translateX(50%)',
      transition: 'all 0.1s ease-in',
    },
    stat: {
      right: '50%',
      top: '50%',
      width: 20,
      height: 40,
      opacity: 0,
      transform: 'translate3d(50%, -50%, 0)',
      position: 'absolute',
      color: colors.grey,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 12,
    },
    statLol: {
     color: `${colors.orange}`,
    },
    statLove: {
      color: `${colors.purple}`,
    },
    statAngry: {
      color: `${colors.red}`,
    },
    statSad: {
      color: `${colors.blue}`,
    },
    statDizzy: {
      color: `${colors.violet}`,
    },
    statSurprised: {
      color: `${colors.lime}`,
    },
    statsLolFly: {
      opacity: 1,
      transform: 'rotate(90deg) translateX(-130px) rotate(-90deg) translateY(-50%) translateX(50%)',
      transition: 'all 0.1s ease-in',
    },
    statsLoveFly: {
      opacity: 1,
      transform: 'rotate(54deg) translateX(-130px) rotate(-54deg) translateY(-50%) translateX(50%)',
      transition: 'all 0.1s ease-in',
    },
    statsAngryFly: {
      opacity: 1,
      transform: 'rotate(18deg) translateX(-130px) rotate(-18deg) translateY(-50%) translateX(50%)',
      transition: 'all 0.1s ease-in',
    },
    statsSadFly: {
      opacity: 1,
      transform: 'rotate(-18deg) translateX(-130px) rotate(18deg) translateY(-50%) translateX(50%)',
      transition: 'all 0.1s ease-in',
    },
    statsDizzyFly: {
      opacity: 1,
      transform: 'rotate(-54deg) translateX(-130px) rotate(54deg) translateY(-50%) translateX(50%)',
      transition: 'all 0.1s ease-in',
    },
    statsSurprisedFly: {
      opacity: 1,
      transform: 'rotate(-90deg) translateX(-130px) rotate(90deg) translateY(-50%) translateX(50%)',
      transition: 'all 0.1s ease-in',
    },
  },
  { name: 'Rater' },
);
