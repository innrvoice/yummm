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
          [classes.tasteLolBg]: tasteBg === 'lol',
          [classes.tasteLoveBg]: tasteBg === 'love',
          [classes.tasteAngryBg]: tasteBg === 'angry',
          [classes.tasteSadBg]: tasteBg === 'sad',
          [classes.tasteDizzyBg]: tasteBg === 'dizzy',
          [classes.tasteSurprisedBg]: tasteBg === 'surprised',
          [classes.tasteLolBorder]: tasteBorder === 'lol',
          [classes.tasteLoveBorder]: tasteBorder === 'love',
          [classes.tasteAngryBorder]: tasteBorder === 'angry',
          [classes.tasteSadBorder]: tasteBorder === 'sad',
          [classes.tasteDizzyBorder]: tasteBorder === 'dizzy',
          [classes.tasteSurprisedBorder]: tasteBorder === 'surprised',
          
        })}
      >
        <div
          className={cx(classes.taste, {
            [classes.tasteLol]: taste === 'lol',
            [classes.tasteLove]: taste === 'love',
            [classes.tasteAngry]: taste === 'angry',
            [classes.tasteSad]: taste === 'sad',
            [classes.tasteDizzy]: taste === 'dizzy',
            [classes.tasteSurprised]: taste === 'surprised',
          })}
        />
      </div>
    </div>
  );
};
export default Taste;
