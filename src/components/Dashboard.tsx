import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';

interface DashboardProps {
  songs: any[];
  playlists: any[];
  onPlaySong: (song: any) => void;
  onToggleLike: (songId: string) => void;
  onNavigate: (view: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  songs,
  playlists,
  onPlaySong,
  onToggleLike,
  onNavigate,
}) => {
  const recentlyPlayed = songs.slice(0, 6);
  const topCharts = songs.slice(0, 5);
  const moodPlaylists = playlists.slice(1, 4);

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-maroon-800 mb-2">
          Good {new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 18 ? 'Afternoon' : 'Evening'}
        </h1>
        <p className="text-maroon-600">Ready to discover your next favorite song?</p>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {playlists.slice(0, 6).map((playlist) => (
          <button
            key={playlist.id}
            onClick={() => onNavigate(`playlist-${playlist.id}`)}
            className="flex items-center gap-4 bg-maroon-50 hover:bg-maroon-100 p-4 rounded-lg transition-colors group"
          >
            <img
              src={playlist.coverImage}
              alt={playlist.name}
              className="w-16 h-16 rounded-lg"
            />
            <span className="font-medium text-maroon-800 group-hover:text-maroon-900">
              {playlist.name}
            </span>
          </button>
        ))}
      </div>

      {/* Recently Played */}
      <section>
        <h2 className="text-2xl font-bold text-maroon-800 mb-4">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {recentlyPlayed.map((song) => (
            <div
              key={song.id}
              className="bg-white rounded-lg p-4 hover:bg-maroon-50 transition-colors group cursor-pointer"
              onClick={() => onPlaySong(song)}
            >
              <div className="relative mb-3">
                <img
                  src={song.albumArt}
                  alt={song.title}
                  className="w-full aspect-square rounded-lg"
                />
                <button className="absolute bottom-2 right-2 bg-white text-maroon-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-4 h-4" />
                </button>
              </div>
              <h3 className="font-medium text-maroon-800 mb-1 truncate">{song.title}</h3>
              <p className="text-sm text-maroon-600 truncate">{song.artist}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mood Playlists */}
      <section>
        <h2 className="text-2xl font-bold text-maroon-800 mb-4">Mood Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moodPlaylists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => onNavigate(`playlist-${playlist.id}`)}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={playlist.coverImage}
                  alt={playlist.name}
                  className="w-16 h-16 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-maroon-800 group-hover:text-maroon-900">
                    {playlist.name}
                  </h3>
                  <p className="text-sm text-maroon-600">{playlist.description}</p>
                </div>
              </div>
              <p className="text-sm text-maroon-600">{playlist.songs.length} songs</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Charts */}
      <section>
        <h2 className="text-2xl font-bold text-maroon-800 mb-4">Top Charts</h2>
        <div className="bg-white rounded-lg p-6">
          <div className="space-y-3">
            {topCharts.map((song, index) => (
              <div
                key={song.id}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-maroon-50 group cursor-pointer"
                onClick={() => onPlaySong(song)}
              >
                <span className="text-2xl font-bold text-maroon-400 w-8 text-center">
                  {index + 1}
                </span>
                <img
                  src={song.albumArt}
                  alt={song.title}
                  className="w-12 h-12 rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-maroon-800 truncate">{song.title}</h4>
                  <p className="text-sm text-maroon-600 truncate">{song.artist}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleLike(song.id);
                  }}
                  className={`p-2 rounded-full transition-colors ${
                    song.isLiked
                      ? 'text-red-500 hover:text-red-400'
                      : 'text-maroon-300 hover:text-maroon-500'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${song.isLiked ? 'fill-current' : ''}`} />
                </button>
                <span className="text-sm text-maroon-600">{song.duration}</span>
                <button className="text-maroon-300 hover:text-maroon-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;