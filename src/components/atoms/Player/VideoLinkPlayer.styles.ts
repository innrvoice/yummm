import { colors } from '../../../theme';
import { createUseStyles } from 'react-jss';
import { IVideoLinkPlayerProps } from '.';

import defaultBackground from '../../../assets/bg.svg';
interface INeededProps {
  backgroundThumbnail?: string;
}

export default createUseStyles<string, INeededProps>(
  {
    root: {
      color: colors.grey,
      border: `1px solid ${colors.grey}`,
      width: '100%',
      height: '100%',
      backgroundImage: (props: INeededProps): string =>
        props.backgroundThumbnail
          ? `url(${props.backgroundThumbnail}`
          : `url(${defaultBackground})`,
      backgroundColor: colors.darkGrey,
      backgroundSize: (props: INeededProps): string =>
        props.backgroundThumbnail
          ? 'contain'
          : '20%',
      backgroundRepeat: (props: INeededProps): string =>
        props.backgroundThumbnail ? 'no-repeat' : 'repeat',
      backgroundPosition: (props: INeededProps): string =>
        props.backgroundThumbnail ? 'center center' : 'top left',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  { name: 'Player' },
);
