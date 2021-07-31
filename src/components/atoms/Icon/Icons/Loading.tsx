import React from 'react';
import useStyles from './Loading.styles';

const Loading: React.FC = () => {
  const classes = useStyles();
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        r="35"
        opacity=".2"
      />
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        r="35"
        strokeDasharray="30 160"
        className={classes.circle}
      />
    </svg>
  );
};

export default Loading;
