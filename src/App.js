import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header/Header';
import Characters from './components/Characters/Characters';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios(`https://www.breakingbadapi.com/api/characters`);

      setItems(data.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className='main-wrapper'>
      <Header />
      <Characters isLoading={isLoading} characters={items} />
    </div>
  );
}

export default App;
