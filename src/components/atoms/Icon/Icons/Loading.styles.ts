import { createUseStyles } from 'react-jss';

export default createUseStyles({
  circle: {
    animation: '$rotate 1s infinite linear ',
    transformOrigin: 'center center 0',
  },

  '@keyframes rotate': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
});
