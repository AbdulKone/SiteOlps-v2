import React from 'react';
import { Html } from '@react-three/drei';

const Loading = () => {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loading;