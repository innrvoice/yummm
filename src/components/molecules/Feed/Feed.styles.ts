import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    wrap: {
      width: '100%',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > div': {
        marginBottom: 40,
      },
    },
  },
  { name: 'Feed' },
);
