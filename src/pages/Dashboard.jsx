import React, { useState, useEffect } from 'react';
import { Languages, Pencil, Headphones } from 'lucide-react';
import WordSmall from '../components/WordSmall/WordSmall';
import WordBig from '../components/WordBig/WordBig';
import { fetchRandomWord } from '../services/fetchRandomWord';

const Dashboard = () => {
  const [bigWord, setBigWord] = useState(null);
  const [smallWords, setSmallWords] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWords = async () => {
      setLoading(true);
      try {

        const mainWord = await fetchRandomWord();
        setBigWord(mainWord);

        const smallWordsPromises = Array(3).fill().map(() => fetchRandomWord());
        const words = await Promise.all(smallWordsPromises);
        setSmallWords(words);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getWords();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-5 font-sans flex-col items-center min-w-65">
      {bigWord && (
        <WordBig 
          word={bigWord.word}
          phonetic={bigWord.phonetic}
          definition={bigWord.definition}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {smallWords.map((word, index) => (
          <WordSmall
            key={`${word.word}-${index}`}
            word={word.word}
            definition={word.definition}
          />
        ))}

        {/* Games section */}
        <div className="rounded-lg shadow-md p-5 bg-gradient-to-r from-yellow-300 to-amber-400 hover:from-violet-500 hover:to-violet-600 transform transition-all duration-300 cursor-pointer text-white flex flex-col items-center justify-center">
          <Languages size={40} className="mb-2" />
          <h3 className="font-bold text-lg">Translation Game</h3>
          <p className="text-sm text-center">Test your translation skills</p>
        </div>

        {/* Sentence Builder */}
        <div className="rounded-lg shadow-md p-5 bg-gradient-to-r from-purple-300 to-violet-400 hover:from-violet-500 hover:to-violet-600 transform transition-all duration-300 cursor-pointer text-white flex flex-col items-center justify-center">
          <Pencil size={40} className="mb-2" />
          <h3 className="font-bold text-lg">Sentence Builder</h3>
          <p className="text-sm text-center">Create perfect sentences</p>
        </div>

        {/* Audio Quiz */}
        <div className="rounded-lg shadow-md p-5 bg-gradient-to-r from-cyan-300 to-blue-400 hover:from-violet-500 hover:to-violet-600 transform transition-all duration-300 cursor-pointer text-white flex flex-col items-center justify-center">
          <Headphones size={40} className="mb-2" />
          <h3 className="font-bold text-lg">Audio Quiz</h3>
          <p className="text-sm text-center">Test your listening skills</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
