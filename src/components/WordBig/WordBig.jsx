import React from 'react';
import { Heart, Play } from 'lucide-react';

function WordBig({ word, phonetic, definition, audio }) {
  const playAudio = () => {
    if (audio) {
      new Audio(audio).play();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-5 w-full max-w-4xl relative">
      <h2 className="text-2xl font-bold mb-1 text-gray-900">{word}</h2>
      <p className="text-sm mb-3 text-gray-400">{phonetic}</p>
      <p className="text-base mb-4 text-gray-900">{definition}</p>
      <button 
        onClick={playAudio}
        disabled={!audio}
        className={`font-bold py-2 px-4 rounded flex items-center ${
          audio 
            ? 'bg-yellow-400 text-yellow-50 hover:bg-violet-600 cursor-pointer' 
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        <Play className="mr-2" size={20} />
        Listen
      </button>
      <Heart className="absolute top-3 right-3 text-gray-400 hover:text-violet-600 cursor-pointer" size={20}/>
    </div>
  );
}

export default WordBig;