import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Loader.styles';

export interface ILoaderProps {
  timesToRotate?: string;
}

const CssBaseline: React.FC<ILoaderProps> = ({ timesToRotate }) => {
  const theme = useTheme();
  const classes = useStyles({ timesToRotate });

  return (
    <div className={classes.root}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 70.66" height="100%">
        <g>
          <circle cx="31.97" cy="10.41" r="10.41" className={classes.first} />
          <circle cx="53.58" cy="22.88" r="10.41" className={classes.second} />
          <circle cx="53.59" cy="47.82" r="10.41" className={classes.third} />
          <circle cx="31.97" cy="60.25" r="10.41" className={classes.forth} />
          <circle cx="10.41" cy="47.81" r="10.41" className={classes.fifth} />
          <circle cx="10.41" cy="22.86" r="10.41" className={classes.sixth} />
        </g>
      </svg>
    </div>
  );
};

export default CssBaseline;
