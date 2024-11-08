import React from 'react'
interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPauseClick: (isPlaying: boolean) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
}
const PlayerControls: React.FC<PlayerControlsProps> = (props) => {
  const { isPlaying, onPlayPauseClick, onPrevClick, onNextClick } = props;
  return (
    <div>
      <Button variant='ghost' size='icon' onClick={onPrevClick}>
        <Icon name='skip-back' />
      </Button>
      {
        isPlaying ? <Button variant='ghost' size='icon' onClick={() => onPlayPauseClick(false)}>
          <Icon name='circle-pause' />
        </Button> : <Button variant='ghost' size='icon' onClick={() => onPlayPauseClick(true)}>
          <Icon name='circle-play' />
        </Button>
      }
      <Button variant='ghost' size='icon' onClick={onNextClick}>
        <Icon name='skip-forward' />
      </Button>
      <Button variant='ghost' size='icon'>
        <Icon name='volume' />
      </Button>
    </div>
  )
}

export default PlayerControls