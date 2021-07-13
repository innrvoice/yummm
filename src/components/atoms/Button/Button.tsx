import * as React from 'react';
import cx from 'clsx';
import useStyles from './Button.styles';

export type IButtonColor = 'blue' | 'white' | 'transparent-white';
export interface IIconSize {
  width?: number | string;
  height?: number | string;
}

export interface IButtonProps {
  children: React.ReactNode | string;
  disabled?: boolean;
  border?: boolean;
  color?: IButtonColor;
  locators?: Record<string, string>;
  width?: number;
  height?: number;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void | Promise<void>;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  color = 'blue',
  locators,
  disabled,
  border = false,
  width,
  height,
  loading,
  type,
}) => {
  const classes = useStyles();
  return (
    <button
      {...locators}
      className={cx(classes.button, classes[color], {
        [classes.disabled]: disabled || loading,
        [classes.bordered]: border,
      })}
      onClick={onClick}
      disabled={disabled || loading}
      style={{ width, height }}
      type={type}
    >
      <div className={classes.container}>
        {loading ? (
          <div className={classes.indicator}>
            Loading
          </div>
        ) : (
          <>{children}</>
        )}
      </div>
    </button>
  );
};
export default Button;
