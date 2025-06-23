import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart } from 'lucide-react';

interface PlayerProps {
  currentSong: any;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onToggleLike: (songId: string) => void;
}

const Player: React.FC<PlayerProps> = ({
  currentSong,
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  onToggleLike,
}) => {
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0); // 0: none, 1: all, 2: one

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => (prev + 1) % 100);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  if (!currentSong) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-maroon-800 border-t border-maroon-700 p-4 z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Current Song Info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <img
            src={currentSong.albumArt}
            alt={currentSong.title}
            className="w-12 h-12 rounded-lg"
          />
          <div className="min-w-0">
            <p className="text-white font-medium truncate">{currentSong.title}</p>
            <p className="text-maroon-300 text-sm truncate">{currentSong.artist}</p>
          </div>
          <button
            onClick={() => onToggleLike(currentSong.id)}
            className={`p-2 rounded-full transition-colors ${
              currentSong.isLiked
                ? 'text-red-500 hover:text-red-400'
                : 'text-maroon-300 hover:text-white'
            }`}
          >
            <Heart className={`w-5 h-5 ${currentSong.isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsShuffled(!isShuffled)}
              className={`p-2 rounded-full transition-colors ${
                isShuffled ? 'text-white bg-maroon-600' : 'text-maroon-300 hover:text-white'
              }`}
            >
              <Shuffle className="w-4 h-4" />
            </button>
            <button
              onClick={onPrevious}
              className="text-maroon-300 hover:text-white transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={onPlayPause}
              className="bg-white text-maroon-800 p-3 rounded-full hover:bg-maroon-100 transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button
              onClick={onNext}
              className="text-maroon-300 hover:text-white transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </button>
            <button
              onClick={() => setRepeatMode((repeatMode + 1) % 3)}
              className={`p-2 rounded-full transition-colors ${
                repeatMode > 0 ? 'text-white bg-maroon-600' : 'text-maroon-300 hover:text-white'
              }`}
            >
              <Repeat className="w-4 h-4" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-maroon-300">{formatTime(Math.floor(progress * 2.42))}</span>
            <div className="flex-1 bg-maroon-700 rounded-full h-1">
              <div
                className="bg-white h-1 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-xs text-maroon-300">{currentSong.duration}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <Volume2 className="w-5 h-5 text-maroon-300" />
          <div className="w-24 bg-maroon-700 rounded-full h-1">
            <div
              className="bg-white h-1 rounded-full"
              style={{ width: `${volume}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;