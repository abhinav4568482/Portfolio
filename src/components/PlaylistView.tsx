import React from 'react';
import { Play, Heart, MoreHorizontal, Clock, Music } from 'lucide-react';

interface PlaylistViewProps {
  playlist: any;
  onPlaySong: (song: any) => void;
  onToggleLike: (songId: string) => void;
  onBack: () => void;
}

const PlaylistView: React.FC<PlaylistViewProps> = ({
  playlist,
  onPlaySong,
  onToggleLike,
  onBack,
}) => {
  if (!playlist) {
    return (
      <div className="p-6">
        <p className="text-maroon-600">Playlist not found.</p>
      </div>
    );
  }

  const totalDuration = playlist.songs.reduce((total: number, song: any) => {
    const [minutes, seconds] = song.duration.split(':').map(Number);
    return total + minutes * 60 + seconds;
  }, 0);

  const formatTotalDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="text-maroon-600 hover:text-maroon-800 font-medium"
      >
        ← Back
      </button>

      {/* Playlist Header */}
      <div className="flex items-end gap-6 bg-gradient-to-r from-maroon-600 to-maroon-800 text-white p-8 rounded-lg">
        <img
          src={playlist.coverImage}
          alt={playlist.name}
          className="w-48 h-48 rounded-lg shadow-lg"
        />
        <div className="flex-1">
          <p className="text-sm opacity-90 mb-2">PLAYLIST</p>
          <h1 className="text-4xl font-bold mb-4">{playlist.name}</h1>
          <p className="text-lg opacity-90 mb-4">{playlist.description}</p>
          <div className="flex items-center gap-4 text-sm opacity-90">
            <span>{playlist.songs.length} songs</span>
            <span>•</span>
            <span>{formatTotalDuration(totalDuration)}</span>
          </div>
        </div>
      </div>

      {/* Play Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => playlist.songs.length > 0 && onPlaySong(playlist.songs[0])}
          className="bg-maroon-600 text-white p-4 rounded-full hover:bg-maroon-700 transition-colors"
        >
          <Play className="w-6 h-6" />
        </button>
        <button className="p-4 text-maroon-600 hover:text-maroon-800 transition-colors">
          <Heart className="w-6 h-6" />
        </button>
        <button className="p-4 text-maroon-600 hover:text-maroon-800 transition-colors">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* Songs List */}
      <div className="bg-white rounded-lg">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-maroon-200 text-sm font-medium text-maroon-600">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-5">TITLE</div>
          <div className="col-span-3">ALBUM</div>
          <div className="col-span-2">GENRE</div>
          <div className="col-span-1 text-center">
            <Clock className="w-4 h-4 mx-auto" />
          </div>
        </div>

        {/* Songs */}
        <div className="space-y-1">
          {playlist.songs.map((song: any, index: number) => (
            <div
              key={song.id}
              className="grid grid-cols-12 gap-4 p-4 hover:bg-maroon-50 transition-colors group cursor-pointer rounded-lg"
              onClick={() => onPlaySong(song)}
            >
              <div className="col-span-1 text-center text-maroon-600 font-medium">
                <span className="group-hover:hidden">{index + 1}</span>
                <Play className="w-4 h-4 mx-auto hidden group-hover:block" />
              </div>
              <div className="col-span-5 flex items-center gap-3">
                <img
                  src={song.albumArt}
                  alt={song.title}
                  className="w-10 h-10 rounded"
                />
                <div>
                  <p className="font-medium text-maroon-800">{song.title}</p>
                  <p className="text-sm text-maroon-600">{song.artist}</p>
                </div>
              </div>
              <div className="col-span-3 flex items-center text-maroon-600">
                {song.album}
              </div>
              <div className="col-span-2 flex items-center">
                <span className="text-xs text-maroon-500 bg-maroon-100 px-2 py-1 rounded">
                  {song.genre}
                </span>
              </div>
              <div className="col-span-1 flex items-center justify-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleLike(song.id);
                  }}
                  className={`p-1 rounded-full transition-colors opacity-0 group-hover:opacity-100 ${
                    song.isLiked
                      ? 'text-red-500 hover:text-red-400 opacity-100'
                      : 'text-maroon-300 hover:text-maroon-500'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${song.isLiked ? 'fill-current' : ''}`} />
                </button>
                <span className="text-sm text-maroon-600">{song.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;