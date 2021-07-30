import { colors } from '../../../theme';
import { createUseStyles } from 'react-jss';
import shadow from '../../../assets/shadow.svg';
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

const FLYOUT = '-100px';

const STATFLYOUT = '-155px';

export default createUseStyles(
  {
    root: {
      color: colors.black,
      width: '60px',
      height: '60px',
      position: 'relative',
    },

    shadow: {
      position: 'absolute',
      backgroundImage: `url(${shadow})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: '100%',
      width: 700,
      height: 1400,
      top: 0,
      transform: 'translateY(-41%)',
      zIndex: -1,
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
    fly1: {
      opacity: 1,
      transform: `rotate(90deg) translateX(${FLYOUT}) rotate(-90deg) translateY(-50%) translateX(50%)`,
      transition: 'all 0.1s ease-in',
    },
    fly2: {
      opacity: 1,
      transform: `rotate(54deg) translateX(${FLYOUT}) rotate(-54deg) translateY(-50%) translateX(50%)`,
      transition: 'all 0.1s ease-in',
    },
    fly3:  {
      opacity: 1,
      transform: `rotate(18deg) translateX(${FLYOUT}) rotate(-18deg) translateY(-50%) translateX(50%)`,
      transition: 'all 0.1s ease-in',
    },
    fly4: {
      opacity: 1,
      transform: `rotate(-18deg) translateX(${FLYOUT}) rotate(18deg) translateY(-50%) translateX(50%)`,
      transition: 'all 0.1s ease-in',
    },
    fly5: {
      opacity: 1,
      transform: `rotate(-54deg) translateX(${FLYOUT}) rotate(54deg) translateY(-50%) translateX(50%)`,
      transition: 'all 0.1s ease-in',
    },
    fly6: {
      opacity: 1,
      transform: `rotate(-90deg) translateX(${FLYOUT}) rotate(90deg) translateY(-50%) translateX(50%)`,
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
    stats1Fly: {
      opacity: 1,
      transform: `rotate(90deg) translateX(${STATFLYOUT}) rotate(-90deg) translateY(-50%) translateX(50%)`,
      transition: 'all 0.1s ease-in',
    },
    stats2Fly: {
      opacity: 1,
      transform: `rotate(54deg) translateX(${STATFLYOUT}) rotate(-54deg) translateY(-50%) translateX(50%)`,
      transition: 'all 0.1s ease-in',
    },
    stats3Fly: {
      opacity: 1,
      transform: `rotate(18deg) translateX(${STATFLYOUT}) rotate(-18deg) translateY(-50%) translateX(50%)`,
      transition: 'all 0.1s ease-in',
    },
    stats4Fly: {
      opacity: 1,
      transform: `rotate(-18deg) translateX(${STATFLYOUT}) rotate(18deg) translateY(-50%) translateX(50%)`,
      transition: 'all 0.1s ease-in',
    },
    stats5Fly: {
      opacity: 1,
      transform: `rotate(-54deg) translateX(${STATFLYOUT}) rotate(54deg) translateY(-50%) translateX(50%)`,
      transition: 'all 0.1s ease-in',
    },
    stats6Fly: {
      opacity: 1,
      transform: `rotate(-90deg) translateX(${STATFLYOUT}) rotate(90deg) translateY(-50%) translateX(50%)`,
      transition: 'all 0.1s ease-in',
    },
  },
  { name: 'Rater' },
);
