import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './CssBaseline.styles';

const CssBaseline: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme: theme ? theme : undefined });

  return <div className={classes.root} />;
};

export default CssBaseline;
