import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import useStyles from './Image.styles';
import cx from 'clsx';

export interface IImageProps {
  width?: string;
  urls: string[];
}



// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset: number, velocity: number) => {
//   return Math.abs(offset) * velocity;
// };

const Image: React.FC<IImageProps> = ({ urls, width = '300px' }) => {
  const classes = useStyles();
  const [[page, direction], setPage] = React.useState([0, 0]);

  const imageIndex = wrap(0, urls.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const [showArrows, setShowArrows] = React.useState(false);

  const show = (show: boolean) => () => setShowArrows(show);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? width : `-${width}`,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? width : `-${width}`,
        opacity: 0,
      };
    },
  };

  return (
    <div
      className={classes.root}
      style={{ width, height: width }}
      onMouseEnter={urls.length > 1 ? show(true) : undefined}
      onMouseLeave={urls.length > 1 ? show(false) : undefined}
    >
      {urls.length > 1 ? (
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className={classes.img}
            onClick={() => console.log('!!!')}
            key={page}
            src={urls[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            // drag="x"
            // dragConstraints={{ left: 0, right: 0 }}
            // dragElastic={1}
            // onDragEnd={(e, { offset, velocity }) => {
            //   const swipe = swipePower(offset.x, velocity.x);

            //   if (swipe < -swipeConfidenceThreshold) {
            //     paginate(1);
            //   } else if (swipe > swipeConfidenceThreshold) {
            //     paginate(-1);
            //   }
            // }}
          />
        </AnimatePresence>
      ) : (
        <img src={urls[imageIndex]} className={classes.img} />
      )}
      {urls.length > 1 && (
        <>
          <div
            className={cx(classes.next, { [classes.show]: showArrows })}
            onClick={() => paginate(1)}
          />
          <div
            className={cx(classes.prev, { [classes.show]: showArrows })}
            onClick={() => paginate(-1)}
          />

          <div className={classes.numberOfImages}>
            <div className={classes.num}>{imageIndex + 1}</div><div className={classes.devider}>/</div><div className={classes.num}>{urls.length}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Image;
