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

const FLYOUT = '-100px';

const STATFLYOUT = '-155px';

export default createUseStyles(
  {
    root: {
      color: colors.black,
      border: `1px solid ${colors.grey}`,
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative',
    },
    imageWrap: {
      width: '90px',
      height: '90px',
      border: `1px solid ${colors.grey}`,
      flexShrink: 0,
      boxSizing: 'border-box',
      backgroundColor: colors.orange,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: 1,
      cursor: 'pointer',
    },
    subRoot: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexWrap: 'wrap',
      opacity: 0.4,
    },
  },
  { name: 'Rater' },
);
