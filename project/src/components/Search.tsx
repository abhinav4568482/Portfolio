import React, { useState, useMemo } from 'react';
import { Search as SearchIcon, Play, Heart, Filter } from 'lucide-react';
import { genres, moods } from '../data/mockData';

interface SearchProps {
  songs: any[];
  onPlaySong: (song: any) => void;
  onToggleLike: (songId: string) => void;
}

const Search: React.FC<SearchProps> = ({ songs, onPlaySong, onToggleLike }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedMood, setSelectedMood] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredSongs = useMemo(() => {
    return songs.filter(song => {
      const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           song.album.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesGenre = selectedGenre === 'All' || song.genre === selectedGenre;
      const matchesMood = selectedMood === 'All' || song.mood === selectedMood;
      
      return matchesSearch && matchesGenre && matchesMood;
    });
  }, [songs, searchQuery, selectedGenre, selectedMood]);

  return (
    <div className="p-6 space-y-6">
      {/* Search Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-maroon-800">Search</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-maroon-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for songs, artists, or albums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          />
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-maroon-100 text-maroon-800 rounded-lg hover:bg-maroon-200 transition-colors"
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="bg-white rounded-lg p-6 border border-maroon-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-maroon-800 mb-2">Genre</label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full p-2 border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-maroon-800 mb-2">Mood</label>
              <select
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value)}
                className="w-full p-2 border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
              >
                {moods.map(mood => (
                  <option key={mood} value={mood}>{mood}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Browse Categories (when no search query) */}
      {!searchQuery && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-maroon-800">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {genres.slice(1).map(genre => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className="bg-gradient-to-br from-maroon-500 to-maroon-700 text-white p-6 rounded-lg hover:from-maroon-600 hover:to-maroon-800 transition-all transform hover:scale-105"
              >
                <span className="font-semibold">{genre}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {(searchQuery || selectedGenre !== 'All' || selectedMood !== 'All') && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-maroon-800">
            {searchQuery ? `Results for "${searchQuery}"` : 'Filtered Results'} 
            <span className="text-sm font-normal text-maroon-600 ml-2">
              ({filteredSongs.length} songs)
            </span>
          </h2>
          
          {filteredSongs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-maroon-600">No songs found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredSongs.map((song) => (
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
                  <p className="text-sm text-maroon-600 truncate mb-2">{song.artist}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-maroon-500 bg-maroon-100 px-2 py-1 rounded">
                      {song.genre}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleLike(song.id);
                      }}
                      className={`p-1 rounded-full transition-colors ${
                        song.isLiked
                          ? 'text-red-500 hover:text-red-400'
                          : 'text-maroon-300 hover:text-maroon-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${song.isLiked ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;