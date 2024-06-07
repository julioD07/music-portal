import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp, FaVolumeMute, FaArrowsAlt } from 'react-icons/fa';
import { useAppSelector } from '../store';


export const Reproductor: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const song = useAppSelector((state) => state.song);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleLoadedData = () => {
      if (audioElement) {
        setDuration(audioElement.duration);
        setCurrentTime(0);
        setProgress(0);
        setIsPlaying(false);
      }
    };

    const handleTimeUpdate = () => {
      if (audioElement) {
        setCurrentTime(audioElement.currentTime);
        setProgress((audioElement.currentTime / audioElement.duration) * 100);
      }
    };

    const handleError = () => {
      console.error("Error loading audio source");
      setIsPlaying(false);
    };

    if (audioElement) {
      audioElement.addEventListener('loadeddata', handleLoadedData);
      audioElement.addEventListener('timeupdate', handleTimeUpdate);
      audioElement.addEventListener('error', handleError);
      audioElement.load();
    }

    handlePlayPause();

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('loadeddata', handleLoadedData);
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
        audioElement.removeEventListener('error', handleError);
      }
    };
    
  }, [song.src]);

  const handlePlayPause = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkipForward = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.currentTime += 10;
    }
  };

  const handleSkipBackward = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.currentTime -= 10;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = newVolume;
    }
  };

  const toggleMute = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      setIsMuted(!isMuted);
      audioElement.muted = !isMuted;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col sm:flex-row items-center justify-between mt-10">
      <div className="flex items-center mb-4 sm:mb-0">
        <img
          src={song.imageUrl}
          alt={song.title}
          className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{song.title}</h3>
          <p className="text-gray-400">{song.artist}</p>
        </div>
      </div>
      <div className="flex items-center flex-grow justify-center mx-4 mb-4 sm:mb-0">
        <button onClick={handleSkipBackward} className="mx-2">
          <FaBackward />
        </button>
        <button onClick={handlePlayPause} className="mx-2">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={handleSkipForward} className="mx-2">
          <FaForward />
        </button>
        <div className="flex items-center mx-4 w-full max-w-xs sm:max-w-md">
          <span className="text-xs sm:text-base">{formatTime(currentTime)}</span>
          <input
            type="range"
            value={isNaN(progress) ? 0 : progress}
            onChange={(e) => {
              const audioElement = audioRef.current;
              if (audioElement) {
                audioElement.currentTime = (parseFloat(e.target.value) / 100) * audioElement.duration;
              }
            }}
            className="mx-2 w-full"
          />
          <span className="text-xs sm:text-base">{formatTime(duration)}</span>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={toggleMute} className="mx-2">
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type="range"
          value={volume}
          onChange={handleVolumeChange}
          min="0"
          max="1"
          step="0.01"
          className="mx-2 w-16 sm:w-24"
        />
        <button className="mx-2">
          <FaArrowsAlt />
        </button>
      </div>
      <audio ref={audioRef} src={song.src} />
    </footer>
  );
};
