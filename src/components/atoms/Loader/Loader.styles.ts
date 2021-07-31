import { createUseStyles } from 'react-jss';
import { colors } from '../../../theme';

const animationDuration = '0.5s';

interface INeededProps {
  timesToRotate?: string, 
}

export default createUseStyles(
  {
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    first: {
      fill: colors.orange,
      animation: (props: INeededProps) => `$animate1 ${animationDuration} ${props.timesToRotate ? props.timesToRotate : 'infinite'} ease-out`,
    },
    second: {
      fill: colors.purple,
      animation: (props: INeededProps) => `$animate2 ${animationDuration} ${props.timesToRotate ? props.timesToRotate : 'infinite'} ease-out`,
    },
    third: {
      fill: colors.red,
      animation: (props: INeededProps) => `$animate3 ${animationDuration} ${props.timesToRotate ? props.timesToRotate : 'infinite'} ease-out`,
    },
    forth: {
      fill: colors.blue,
      animation: (props: INeededProps) => `$animate4 ${animationDuration} ${props.timesToRotate ? props.timesToRotate : 'infinite'} ease-out`,
    },
    fifth: {
      fill: colors.violet,
      animation: (props: INeededProps) => `$animate5 ${animationDuration} ${props.timesToRotate ? props.timesToRotate : 'infinite'} ease-out`,
    },
    sixth: {
      fill: colors.lime,
      animation: (props: INeededProps) => `$animate6 ${animationDuration} ${props.timesToRotate ? props.timesToRotate : 'infinite'} ease-out`,
    },

    '@keyframes animate1': {
      '0%': {
        fill: colors.orange,
        opacity: 1,
      },
      '16.6%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '33.2%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '49.8%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '66.4%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '83%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '100%': {
        fill: colors.orange,
        opacity: 1,
      },
    },
    '@keyframes animate2': {
      '0%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '16.6%': {
        fill: colors.purple,
        opacity: 1,
      },
      '33.2%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '49.8%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '66.4%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '83%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '100%': {
        fill: colors.white,
        opacity: 0.3,
      },
    },
    '@keyframes animate3': {
      '0%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '16.6%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '33.2%': {
        fill: colors.red,
        opacity: 1,
      },
      '49.8%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '66.4%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '83%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '100%': {
        fill: colors.white,
        opacity: 0.3,
      },
    },
    '@keyframes animate4': {
      '0%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '16.6%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '33.2%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '49.8%': {
        fill: colors.blue,
        opacity: 1,
      },
      '66.4%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '83%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '100%': {
        fill: colors.white,
        opacity: 0.3,
      },
    },
    '@keyframes animate5': {
      '0%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '16.6%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '33.2%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '49.8%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '66.4%': {
        fill: colors.violet,
        opacity: 1,
      },
      '83%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '100%': {
        fill: colors.white,
        opacity: 0.3,
      },
    },
    '@keyframes animate6': {
      '0%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '16.6%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '33.2%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '49.8%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '66.4%': {
        fill: colors.white,
        opacity: 0.3,
      },
      '83%': {
        fill: colors.lime,
        opacity: 1,
      },
      '100%': {
        fill: colors.white,
        opacity: 0.3,
      },
    },
  },
  { name: 'Loader' },
);
