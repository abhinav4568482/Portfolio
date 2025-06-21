import React from 'react';

const AuroraBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900" />
      
      {/* Aurora Effect */}
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-600/30 to-transparent blur-3xl animate-aurora-1" />
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-600/30 to-transparent blur-3xl animate-aurora-2" />
      <div className="absolute top-1/4 -right-1/3 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl animate-aurora-3" />
      <div className="absolute bottom-1/4 -left-1/3 w-1/3 h-1/3 bg-gradient-to-bl from-indigo-500/20 to-transparent blur-3xl animate-aurora-4" />
    </div>
  );
};

export default AuroraBackground; 