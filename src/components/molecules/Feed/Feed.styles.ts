import { createUseStyles } from 'react-jss';
import { colors } from '../../../theme';
import gotolink from '../../../assets/openlink.svg';

interface INeededProps {
  linkIcon?: string;
}

export default createUseStyles(
  {
    wrap: {
      border: '1px solid blue',
      width: '100%',
      boxSizing: 'border-box',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      border: '2px solid green',
      '& > div': {
        marginBottom: 30,
      },
      // boxSizing: 'border-box',
    },
  },
  { name: 'Feed' },
);
