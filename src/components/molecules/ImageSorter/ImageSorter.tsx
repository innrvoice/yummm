import * as React from 'react';
import cx from 'clsx';
import useStyles from './ImageSorter.styles';
import { EventInfo, motion } from 'framer-motion';

export interface IImageSorterProps {
  images: string[];
}

const ImageSorter: React.FC<IImageSorterProps> = ({ images }) => {
  const classes = useStyles();

  const [imgs, setImgs] = React.useState(images);
  const [isDragging, setIsDragging] = React.useState(-1);

  let refs = {} as any; // Record<string, Record<string, React.Ref<HTMLElement> | number>>;

  const constraintsRef = React.useRef(null);

  const dragStart = (index: number) => () => {
    setIsDragging(index);
  };

  const drag = (index: number) => (event, info) => {
    console.log('!!!', event, info, refs);
    console.log('asdasd', constraintsRef);
    let found = -1;
    Object.keys(refs).map((key) => {
      console.log('aaaa', key);
      console.log('vvvv', refs);
      if (refs) {
        const xMax =
          refs[key].ref.current.offsetLeft +
          refs[key].ref.current.clientWidth +
          constraintsRef.current.offsetLeft;
        const yMax =
          refs[key].ref.current.offsetTop +
          refs[key].ref.current.clientHeight +
          constraintsRef.current.offsetTop;

        if (
          info.point.x >=
            refs[key].ref.current.offsetLeft +
              constraintsRef.current.offsetLeft &&
          info.point.x <= xMax &&
          info.point.y >= refs[key].ref.current.offsetTop +
          constraintsRef.current.offsetTop&&
          info.point.y <= yMax
        ) {
          found = refs[key].index;
        }
      }
    });

    if (found >= 0) {
      const newImgs = imgs.map((img, idx) => {
        if (index < found) {
          if (idx < index) {
            return img;
          } else if (idx >= index && idx < found) {
            return imgs[idx + 1];
          } else if (idx === found) {
            return imgs[index];
          } else {
            return imgs[idx];
          }
        } else {
          if (idx < found) {
            return img;
          } else if (idx === found) {
            return imgs[index];
          } else if (idx > found && idx <= index) {
            return imgs[idx - 1];
          } else {
            return imgs[idx];
          }
        }
        console.log('index', index);
        console.log('found', found);
        console.log('idx', idx);
      });
      setImgs(newImgs);
    } else {
      setImgs([...imgs]);
    }
    setIsDragging(-1);
  };

  const Item = (img: string, index: number) => {
    const ref = React.useRef(null);

    const t: any = {};
    t[`ref${index}`] = { index, ref };
    refs = { ...refs, ...t };

    return (
      <motion.div
        ref={ref}
        key={`image${index}${Math.random()}`}
        animate={{ x: 0, y: 0 }}
        style={{ backgroundImage: `url(${img}` }}
        className={classes.imageWrap}
        whileDrag={{
          scale: 0.7,
          zIndex: 4,
        }}
        drag={true}
        dragConstraints={constraintsRef}
        onDragEnd={drag(index)}
        dragElastic={0.2}
        whileHover={{
          filter: 'brightness(1.2)',
          borderColor: 'rgb(255, 0, 0)',
        }}
      >
        {index}
      </motion.div>
    );
  };

  const BgItem = (img: string, index: number) => {
    return (
      <div
        key={`bg${index}${Math.random()}`}
        style={{ backgroundImage: `url(${img}` }}
        className={classes.imageWrap}
      />
    );
  };

  return (
    <div className={cx(classes.root)} ref={constraintsRef}>
      <div className={classes.subRoot}>{imgs.map((img, index) => BgItem(img, index))}</div>
      {imgs.map((img, index) => Item(img, index))}
    </div>
  );
};
export default ImageSorter;
