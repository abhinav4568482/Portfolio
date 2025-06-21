import { Song, Playlist, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Kumar',
  email: 'alex@sangeet.com',
  avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
};

export const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Midnight Serenade',
    artist: 'Luna Rivers',
    album: 'Nocturnal Dreams',
    duration: '3:42',
    albumArt: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    genre: 'Indie',
    mood: 'Chill',
    isLiked: true
  },
  {
    id: '2',
    title: 'Electric Pulse',
    artist: 'Neon Nights',
    album: 'Synthetic Dreams',
    duration: '4:15',
    albumArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    genre: 'Electronic',
    mood: 'Energetic',
    isLiked: false
  },
  {
    id: '3',
    title: 'Golden Hour',
    artist: 'Sunset Collective',
    album: 'Warm Embrace',
    duration: '3:28',
    albumArt: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    genre: 'Folk',
    mood: 'Happy',
    isLiked: true
  },
  {
    id: '4',
    title: 'Storm Chaser',
    artist: 'Thunder Bay',
    album: 'Wild Storms',
    duration: '4:52',
    albumArt: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    genre: 'Rock',
    mood: 'Intense',
    isLiked: false
  },
  {
    id: '5',
    title: 'Velvet Dreams',
    artist: 'Smooth Operators',
    album: 'Jazz Lounge',
    duration: '5:21',
    albumArt: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    genre: 'Jazz',
    mood: 'Relaxed',
    isLiked: true
  },
  {
    id: '6',
    title: 'Desert Winds',
    artist: 'Sahara Sounds',
    album: 'Endless Horizons',
    duration: '6:14',
    albumArt: 'https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    genre: 'World',
    mood: 'Peaceful',
    isLiked: false
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    name: 'My Favorites',
    description: 'Your most loved tracks',
    coverImage: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    songs: mockSongs.filter(song => song.isLiked),
    isOwn: true
  },
  {
    id: '2',
    name: 'Chill Vibes',
    description: 'Perfect for relaxation',
    coverImage: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    songs: mockSongs.filter(song => song.mood === 'Chill' || song.mood === 'Relaxed'),
    isOwn: false
  },
  {
    id: '3',
    name: 'Workout Hits',
    description: 'High energy tracks for your workout',
    coverImage: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    songs: mockSongs.filter(song => song.mood === 'Energetic' || song.mood === 'Intense'),
    isOwn: false
  },
  {
    id: '4',
    name: 'Happy Days',
    description: 'Songs to brighten your mood',
    coverImage: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    songs: mockSongs.filter(song => song.mood === 'Happy'),
    isOwn: false
  }
];

export const genres = ['All', 'Indie', 'Electronic', 'Folk', 'Rock', 'Jazz', 'World'];
export const moods = ['All', 'Happy', 'Sad', 'Chill', 'Energetic', 'Relaxed', 'Intense', 'Peaceful'];