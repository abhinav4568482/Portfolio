import React from 'react';
import { Home, Search, Library, TrendingUp, User, Heart, Clock, Music } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  user: any;
  playlists: any[];
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, user, playlists }) => {
  const mainMenuItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'library', label: 'Your Library', icon: Library },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
  ];

  const libraryItems = [
    { id: 'liked', label: 'Liked Songs', icon: Heart },
    { id: 'recent', label: 'Recently Played', icon: Clock },
  ];

  return (
    <div className="w-64 bg-maroon-900 text-white h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-maroon-700">
        <h1 className="text-2xl font-bold text-white">Sangeet</h1>
      </div>
      
      {/* User Profile */}
      <div className="p-4 border-b border-maroon-700">
        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-sm">{user.name}</p>
            <p className="text-xs text-maroon-300">Premium Member</p>
          </div>
        </div>
      </div>
      
      {/* Main Menu */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {mainMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${
                currentView === item.id
                  ? 'bg-maroon-700 text-white'
                  : 'text-maroon-200 hover:bg-maroon-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </div>
        
        {/* Library Section */}
        <div className="mt-8">
          <h3 className="text-maroon-300 text-sm font-medium mb-3 uppercase tracking-wider">
            Your Library
          </h3>
          <div className="space-y-2">
            {libraryItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${
                  currentView === item.id
                    ? 'bg-maroon-700 text-white'
                    : 'text-maroon-200 hover:bg-maroon-800 hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Playlists */}
        <div className="mt-8">
          <h3 className="text-maroon-300 text-sm font-medium mb-3 uppercase tracking-wider">
            Playlists
          </h3>
          <div className="space-y-2">
            {playlists.map((playlist) => (
              <button
                key={playlist.id}
                onClick={() => onNavigate(`playlist-${playlist.id}`)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${
                  currentView === `playlist-${playlist.id}`
                    ? 'bg-maroon-700 text-white'
                    : 'text-maroon-200 hover:bg-maroon-800 hover:text-white'
                }`}
              >
                <Music className="w-4 h-4" />
                <span className="truncate">{playlist.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;