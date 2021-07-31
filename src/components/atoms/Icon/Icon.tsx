import * as React from 'react';
import Icons from './Icons';
import clsx from 'clsx';
import useStyles from './Icon.styles';

export interface IIconProps {
  type: keyof typeof Icons;
  className?: string;
}

const Icon: React.FC<IIconProps> = ({ type, className }) => {
  const classes = useStyles();
  const Component = Icons[type];

  return (
    <div className={clsx(classes.root, className)}>
      <Component />
    </div>
  );
};

export default Icon;
