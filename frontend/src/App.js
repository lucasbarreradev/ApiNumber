import React, { useState } from 'react';

const App = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const fetchRandomNumber = async () => {
    try {
      const response = await fetch('/number/post-random', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setRandomNumber(data.value);
    } catch (error) {
      console.error('Error fetching random number:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchRandomNumber}>Obtener número aleatorio</button>
      {randomNumber !== null && <p>Número aleatorio: {randomNumber}</p>}
    </div>
  );
};

export default App;