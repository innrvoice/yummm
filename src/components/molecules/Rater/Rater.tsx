import * as React from 'react';
import cx from 'clsx';
import useStyles from './Rater.styles';
import { Taste } from '../../atoms';
import { Tastes } from '../../atoms/Taste';

export interface ITasteStats {
  lol?: string;
  love?: string;
  angry?: string;
  sad?: string;
  dizzy?: string;
  surprised?: string;
}

export interface IRaterProps {
  ratedTaste?: Tastes;
  winningTaste: Tastes;
  tastesStats: ITasteStats;
}

const Rater: React.FC<IRaterProps> = ({
  ratedTaste,
  winningTaste,
  tastesStats,
}) => {
  const classes = useStyles();

  const [raterOpen, setRaterOpen] = React.useState(false);

  const openRater = () => {
    setRaterOpen(!raterOpen);
  };

  return (
    <div className={cx(classes.root)}>
      <div
        className={cx(classes.tasteWrap, classes.transparent, {
          [classes.fly1]: raterOpen,
        })}
      >
        {raterOpen && (
          <div className={classes.shadow} />
        )}
        <Taste
          taste={'lol'}
          tasteGrayscale={!tastesStats.lol}
          enlargedSize={winningTaste === 'lol' ? true : false}
          tasteBg={tastesStats.lol ? 'lol' : undefined}
          tasteBorder={tastesStats.lol ? 'lol' : undefined}
          borderBig={ratedTaste && ratedTaste === 'lol' ? true : false}
        />
      </div>
      <div
        className={cx(classes.stat, {
          [classes.statLol]: tastesStats && tastesStats.lol,
          [classes.stats1Fly]: raterOpen,
        })}
      >
        {tastesStats.lol ? tastesStats.lol : ''}
      </div>
      <div
        className={cx(classes.tasteWrap, classes.transparent, {
          [classes.fly2]: raterOpen,
        })}
      >
        <Taste
          taste={'love'}
          tasteGrayscale={!tastesStats.love}
          enlargedSize={winningTaste === 'love' ? true : false}
          tasteBg={tastesStats.love ? 'love' : undefined}
          tasteBorder={tastesStats.love ? 'love' : undefined}
          borderBig={ratedTaste && ratedTaste === 'love' ? true : false}
        />
      </div>
      <div
        className={cx(classes.stat, {
          [classes.statLove]: tastesStats && tastesStats.love,
          [classes.stats2Fly]: raterOpen,
        })}
      >
        {tastesStats.love ? tastesStats.love : ''}
      </div>
      <div
        className={cx(classes.tasteWrap, classes.transparent, {
          [classes.fly3]: raterOpen,
        })}
      >
        <Taste
          taste={'surprised'}
          tasteGrayscale={!tastesStats.surprised}
          enlargedSize={winningTaste === 'surprised' ? true : false}
          tasteBg={tastesStats.surprised ? 'surprised' : undefined}
          tasteBorder={tastesStats.surprised ? 'surprised' : undefined}
          borderBig={ratedTaste && ratedTaste === 'surprised' ? true : false}
        />
      </div>
      <div
        className={cx(classes.stat, {
          [classes.statSurprised]: tastesStats && tastesStats.surprised,
          [classes.stats3Fly]: raterOpen,
        })}
      >
        {tastesStats.surprised ? tastesStats.surprised : ''}
      </div>
      <div
        className={cx(classes.tasteWrap, classes.transparent, {
          [classes.fly4]: raterOpen,
        })}
      >
        <Taste
          taste={'angry'}
          tasteGrayscale={!tastesStats.angry}
          enlargedSize={winningTaste === 'angry' ? true : false}
          tasteBg={tastesStats.angry ? 'angry' : undefined}
          tasteBorder={tastesStats.angry ? 'angry' : undefined}
          borderBig={ratedTaste && ratedTaste === 'angry' ? true : false}
        />
      </div>
      <div
        className={cx(classes.stat, {
          [classes.statAngry]: tastesStats && tastesStats.angry,
          [classes.stats4Fly]: raterOpen,
        })}
      >
        {tastesStats.angry ? tastesStats.angry : ''}
      </div>
      <div
        className={cx(classes.tasteWrap, classes.transparent, {
          [classes.fly5]: raterOpen,
        })}
      >
        <Taste
          taste={'dizzy'}
          tasteGrayscale={!tastesStats.dizzy}
          enlargedSize={winningTaste === 'dizzy' ? true : false}
          tasteBg={tastesStats.dizzy ? 'dizzy' : undefined}
          tasteBorder={tastesStats.dizzy ? 'dizzy' : undefined}
          borderBig={ratedTaste && ratedTaste === 'dizzy' ? true : false}
        />
      </div>
      <div
        className={cx(classes.stat, {
          [classes.statDizzy]: tastesStats && tastesStats.dizzy,
          [classes.stats5Fly]: raterOpen,
        })}
      >
        {tastesStats.dizzy ? tastesStats.dizzy : ''}
      </div>
      <div
        className={cx(classes.tasteWrap, classes.transparent, {
          [classes.fly6]: raterOpen,
        })}
      >
        <Taste
          taste={'sad'}
          tasteGrayscale={!tastesStats.surprised}
          enlargedSize={winningTaste === 'sad' ? true : false}
          tasteBg={tastesStats.surprised ? 'sad' : undefined}
          tasteBorder={tastesStats.surprised ? 'sad' : undefined}
          borderBig={ratedTaste && ratedTaste === 'sad' ? true : false}
        />
      </div>
      <div
        className={cx(classes.stat, {
          [classes.statSad]: tastesStats && tastesStats.sad,
          [classes.stats6Fly]: raterOpen,
        })}
      >
        {tastesStats.sad ? tastesStats.sad : ''}
      </div>
      <div className={cx(classes.tasteWrap)} onClick={openRater}>
        <Taste
          taste={ratedTaste ? ratedTaste : winningTaste}
          tasteBorder={ratedTaste ? ratedTaste : winningTaste}
          borderBig={Boolean(ratedTaste)}
          tasteBg={
            ratedTaste && ratedTaste === winningTaste
              ? ratedTaste
              : winningTaste
          }
          enlargedSize={true}
        />
      </div>
    </div>
  );
};
export default Rater;
