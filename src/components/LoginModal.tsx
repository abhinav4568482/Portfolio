import React, { useState } from 'react';
import { X, Music, Mail, Lock, User } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Music className="w-6 h-6 text-maroon-600" />
            <span className="text-xl font-bold text-maroon-800">Sangeet</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-maroon-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-maroon-600" />
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-maroon-800 mb-2">
            {isSignUp ? 'Join Sangeet' : 'Welcome Back'}
          </h2>
          <p className="text-maroon-600">
            {isSignUp 
              ? 'Create your account to start your musical journey' 
              : 'Sign in to continue your musical journey'
            }
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-maroon-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent bg-white/80"
                required
              />
            </div>
          )}
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-maroon-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent bg-white/80"
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-maroon-400 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent bg-white/80"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-maroon-600 text-white py-3 rounded-lg hover:bg-maroon-700 transition-colors font-semibold"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-6">
          <p className="text-maroon-600">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-maroon-700 font-semibold hover:text-maroon-800 ml-1"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>

        {/* Demo Note */}
        <div className="mt-6 p-3 bg-maroon-50 rounded-lg">
          <p className="text-sm text-maroon-700 text-center">
            This is a demo. Any email and password will work!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;