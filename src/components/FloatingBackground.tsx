import React from 'react';

const FloatingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Music Notes */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 text-maroon-600 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3l.01 10.55c-.59-.34-1.27-.55-2.01-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
        ))}
      </div>
      
      {/* Sound Waves */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-3 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-16 h-16 border-2 border-maroon-600 rounded-full animate-ping"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingBackground;