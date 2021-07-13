import { colors } from '../../../theme';
import { createUseStyles } from 'react-jss';
import { IButtonProps } from './Button';

export default createUseStyles(
  {
    button: {
      border: 'none',
      borderRadius: 2,
      boxSizing: 'border-box',
      cursor: 'pointer',
      outline: 'none',
      position: 'relative',
      userSelect: 'none',
      fontFamily: 'inherit',
      fontSize: 14,
      opacity: 0.8,
      height: 32,
      padding: 0,
      minWidth: 113,
      color: 'white',

      '&:active': {
        transform: 'translateY(1px)',
      },

      '&:hover': {
        opacity: 1,
      },
    },

    bordered: {
      border: [1, 'solid', '#8F8F8F'],
    },

    container: {
      padding: 8,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
    },

    disabled: {
      cursor: 'default',
      background: [colors.darkGreyLighter, '!important'],
      color: [colors.darkGrey, '!important'],
      opacity: 0.5,
      '&:active': {
        transform: 'none',
      },

      '&:hover': {
        opacity: 0.5,
      },
    },

    blue: {
      background: colors.blue,
    },

    white: {
      background: colors.white,
      border: [1, 'solid', '#8F8F8F'],
    },

    'transparent-white': {
      background: 'transparent',
    },

    indicator: {
      fontSize: 0,
      width: 27,
      height: 27,
    },
  },
  { name: 'Button' },
);
