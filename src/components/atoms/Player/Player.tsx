import * as React from 'react';
import cx from 'clsx';
import useStyles from './Player.styles';
import ReactPlayer from 'react-player';

export interface IPlayerProps {
  url: string;
  muted?: boolean;
  backgroundThumbnail?: string;
  defaultVolume?: number;
  handlePlayStart?: () => void; 
  isPlaying?: boolean;
}

const Taste: React.FC<IPlayerProps> = ({
  url,
  muted = true,
  defaultVolume = 0.5,
  backgroundThumbnail,
  handlePlayStart,
  isPlaying,
}) => {
  const classes = useStyles({ backgroundThumbnail });
  
  const playerRef = React.useRef(null);
  const [error, setIsError] = React.useState<boolean>(false);

  const onError = () => {
    setIsError(true);
  };

  return (
    <div className={classes.root}>
      {!error ? (
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          width="100%"
          height="100%"
          url={url}
          // pip={pip}
          playing={isPlaying}
          controls={true}
          // light={true}
          loop={true}
          // playbackRate={playbackRate}
          volume={defaultVolume}
          muted={muted}
          onReady={() => console.log('onReady')}
          onStart={() => console.log('onStart')}
          onPlay={handlePlayStart}
          // onEnablePIP={this.handleEnablePIP}
          // onDisablePIP={this.handleDisablePIP}
          // onPause={this.handlePause}
          onBuffer={() => console.log('onBuffer')}
          onSeek={(e) => console.log('onSeek', e)}
          // onEnded={this.handleEnded}
          onError={onError}
          // onProgress={this.handleProgress}
          // onDuration={this.handleDuration}
        />
      ) : (
        <div>
          CANNOT LOAD VIDEO
        </div>
      )}
    </div>
  );
};
export default Taste;
