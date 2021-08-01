import { createUseStyles } from 'react-jss';
import { colors } from '../../../theme';
import gotolink from '../../../assets/openlink.svg';

interface INeededProps {
  linkIcon?: string;
}

export default createUseStyles(
  {
    wrap: {
      width: '100%',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > div': {
        marginBottom: 30,
      },
    },
  },
  { name: 'Feed' },
);
