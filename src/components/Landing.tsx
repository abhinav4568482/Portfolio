import React from 'react';
import { Play, Music, Users, Heart } from 'lucide-react';

interface LandingProps {
  onNavigate: (view: string) => void;
  onLogin: () => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigate, onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-maroon-200 bg-clip-text text-transparent animate-pulse">
              Sangeet.com
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8 text-maroon-100">
              Feel the Beat, Live the Music
            </p>
            <p className="text-lg md:text-xl text-maroon-200 max-w-2xl mx-auto leading-relaxed">
              Discover millions of songs, create your perfect playlists, and immerse yourself in a world of endless musical possibilities.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('dashboard')}
              className="group bg-white text-maroon-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-maroon-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5 group-hover:animate-pulse" />
                Get Started
              </span>
            </button>
            <button
              onClick={onLogin}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-maroon-800 transition-all duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20 bg-white text-maroon-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Sangeet?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-maroon-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-200 transition-colors">
                <Music className="w-8 h-8 text-maroon-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unlimited Music</h3>
              <p className="text-maroon-600">Access millions of songs from every genre and era</p>
            </div>
            <div className="text-center group">
              <div className="bg-maroon-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-200 transition-colors">
                <Users className="w-8 h-8 text-maroon-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Experience</h3>
              <p className="text-maroon-600">Share playlists and discover what friends are listening to</p>
            </div>
            <div className="text-center group">
              <div className="bg-maroon-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-200 transition-colors">
                <Heart className="w-8 h-8 text-maroon-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized</h3>
              <p className="text-maroon-600">AI-powered recommendations tailored to your taste</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;