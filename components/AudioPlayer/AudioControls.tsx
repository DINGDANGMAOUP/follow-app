import  Play  from "./img/play.svg";
import  Pause  from "./img/pause.svg";
import Next  from "./img/next.svg";
import Prev  from "./img/prev.svg";
import Image from "next/image";

interface AudioControlsProps {
  isPlaying: boolean;
  onPlayPauseClick: (isPlaying: boolean) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <Image alt="prev" src={Prev} />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Image alt="pause" src={Pause} />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Image alt="play" src={Play} />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <Image alt="next" src={Next} />
    </button>
  </div>
);

export default AudioControls;
