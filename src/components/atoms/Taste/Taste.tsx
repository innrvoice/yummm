import * as React from 'react';
import cx from 'clsx';
import useStyles from './Taste.styles';

export type Tastes = 'lol' | 'love' | 'angry' | 'sad' | 'dizzy' | 'surprised';

export interface ITasteProps {
  taste: Tastes;
  tasteGrayscale?: boolean;
  tasteBorder?: Tastes;
  borderBig?: boolean;
  tasteBg?: Tastes;
  enlargedSize?: boolean;
  animate?: boolean;
}

const Taste: React.FC<ITasteProps> = ({
  tasteBorder,
  tasteGrayscale = false,
  borderBig,
  tasteBg,
  enlargedSize,
  taste,
  animate = true,
}) => {
  const classes = useStyles({ borderBig, enlargedSize, tasteGrayscale });
  return (
    <div className={classes.scale}>
      <div
        className={cx(classes.root, {
          [classes.hoverLol]: taste === 'lol',
          [classes.hoverLove]: taste === 'love',
          [classes.hoverAngry]: taste === 'angry',
          [classes.hoverSad]: taste === 'sad',
          [classes.hoverDizzy]: taste === 'dizzy',
          [classes.hoverSurprised]: taste === 'surprised',
          [classes.taste1bg]: tasteBg === 'lol',
          [classes.taste2bg]: tasteBg === 'love',
          [classes.taste3bg]: tasteBg === 'angry',
          [classes.taste4bg]: tasteBg === 'sad',
          [classes.taste5bg]: tasteBg === 'dizzy',
          [classes.taste6bg]: tasteBg === 'surprised',
          [classes.taste1border]: tasteBorder === 'lol',
          [classes.taste2border]: tasteBorder === 'love',
          [classes.taste3border]: tasteBorder === 'angry',
          [classes.taste4border]: tasteBorder === 'sad',
          [classes.taste5border]: tasteBorder === 'dizzy',
          [classes.taste6border]: tasteBorder === 'surprised',
          
        })}
      >
        <div
          className={cx(classes.taste, {
            [classes.taste1]: taste === 'lol',
            [classes.taste2]: taste === 'love',
            [classes.taste3]: taste === 'angry',
            [classes.taste4]: taste === 'sad',
            [classes.taste5]: taste === 'dizzy',
            [classes.taste6]: taste === 'surprised',
          })}
        />
      </div>
    </div>
  );
};
export default Taste;
