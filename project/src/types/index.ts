export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  albumArt: string;
  genre: string;
  mood: string;
  isLiked?: boolean;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  songs: Song[];
  isOwn?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export type ViewType = 'landing' | 'dashboard' | 'search' | 'playlist' | 'profile';
export type Theme = 'light' | 'dark';