import { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaVolumeMute,
  FaArrowsAlt,
} from "react-icons/fa";

export const Reproductor: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const song = {
    title: "Sample Song",
    artist: "Sample Artist",
    imageUrl: "https://via.placeholder.com/150",
    src: "http://localhost:5173/audio/Cancion.mp3",
  };

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        setProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      }
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10; // Avanzar 10 segundos
    }
  };

  const handleSkipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10; // Retroceder 10 segundos
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      setIsMuted(!isMuted);
      audioRef.current.muted = !isMuted;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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
            value={progress}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.currentTime =
                  (parseFloat(e.target.value) / 100) *
                  audioRef.current.duration;
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
