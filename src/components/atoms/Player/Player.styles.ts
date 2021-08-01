import { colors } from '../../../theme';
import { createUseStyles } from 'react-jss';

// import defaultBackground from '../../../assets/bg.svg';
interface INeededProps {
  backgroundThumbnail?: string;
}

export default createUseStyles<string, INeededProps>(
  {
    root: {
      color: colors.grey,
      width: '100%',
      height: '80%',
      boxSizing: 'border-box',
      zIndex: 3,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
  },
  { name: 'Player' },
);
