export const fetchRandomWord = async () => {
  try {
    const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9603a07fddmshcaf5226272bacb3p17b7f0jsnc4e2e135c51f', 
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch random word');
    }

    const data = await response.json();

    return {
      word: data.word || 'No word available',
      phonetic: data.pronunciation?.all || 'Not available',
      definition: data.results?.[0]?.definition || 'No definition available',
    };
  } catch (error) {
    throw new Error(`Error fetching random word: ${error.message}`);
  }
};
