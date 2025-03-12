import React from 'react';
import { Heart } from 'lucide-react';

function WordSmall({ word, definition }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative">
      <h3 className="font-bold text-lg mb-1 text-gray-900">{word}</h3>
      <p className="text-gray-600 text-sm">{definition}</p>
      <Heart className="absolute top-2 right-2 text-gray-400 hover:text-violet-600 cursor-pointer" size={20}/>
    </div>
  );
}

export default WordSmall;