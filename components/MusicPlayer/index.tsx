import mc from '@/assets/50-tobylane.mp3'
import { cn } from '@/lib/utils'
const MusicPlayer = () => {
  const audio = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [bufferProgress, setBufferProgress] = useState(0)
  //获取音频缓冲进度
  const bufferUpdateListener = useCallback(() => {
    if (audio.current) {

      const buffered = audio.current.buffered;

      if (buffered.length > 0) {

        const loaded = buffered.end(buffered.length - 1);

        const total = audio.current.duration;
        console.log('loaded', loaded);
        console.log('total', total);
        console.log('buffered', loaded / total * 100);
        setBufferProgress(loaded / total * 100);
      }

    }
  }, [audio])
  //监听缓冲进度
  useEffect(() => {
    audio.current?.addEventListener('progress', bufferUpdateListener);
    return () => {
      audio.current?.removeEventListener('progress', bufferUpdateListener)
    }
  }, [audio, bufferUpdateListener])
  const timeUpdateListener = useCallback(() => {
    console.log('audio duration', audio.current?.duration);
    console.log('listener', audio.current?.currentTime);
    setProgress(audio.current?.currentTime || 0);
  }, [audio]);

  useEffect(() => {
    audio.current = new Audio(mc);
    audio.current?.addEventListener('timeupdate', timeUpdateListener);
    return () => {
      audio.current?.removeEventListener('timeupdate', timeUpdateListener);
    };
  }, [audio, timeUpdateListener]);
  useEffect(() => {
    if (isPlaying) {
      audio.current?.play();
      // startTimer();
    } else {
      audio.current?.pause();
    }
  }, [isPlaying]);
  const playerButton = useMemo(() => {
    return <>
      <Button variant='ghost' disabled size='icon'>
        <Icon name='skip-back' />
      </Button>
      <Button variant='ghost' size='icon' onClick={() => setIsPlaying(pre => !pre)}>
        <Icon name="circle-pause" className={cn("rotate-0 scale-100 transition-all", {
          'rotate-90 scale-0': !isPlaying
        })} />
        <Icon name="circle-play" className={cn("absolute  rotate-90 scale-0  transition-all ", {
          'rotate-0 scale-100': !isPlaying
        })} />
        {/* {isPlaying ? <Icon name='circle-pause' /> : <Icon name='circle-play' />} */}
      </Button>
      <Button variant='ghost' size='icon'>
        <Icon name='skip-forward' />
      </Button>
      <Button variant='ghost' size='icon'>
        <Icon name='volume' />
      </Button>
    </>
  }, [isPlaying])
  const listButton = useMemo(() => {
    return <Button variant='ghost' size='icon'>
      <Icon name='list' />
    </Button>
  }, [])
  return (
    <div className='p-1 h-12 border-t fixed flex flex-row items-center left-[var(--sidebar-width)] bottom-0 right-0 justify-between '>
      {playerButton}
      <div className='mx-2 w-[200px] flex-grow'>
        <Slider value={[progress]} max={audio.current?.duration || 0} step={1} onValueChange={(e) => {
          console.log('onValueChange', e);
          if (audio.current) {
            audio.current.currentTime = e[0]
          }
        }}
        />
      </div>
      {listButton}
    </div>
  )
}

export default MusicPlayer