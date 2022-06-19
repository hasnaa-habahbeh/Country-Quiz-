import { useState, useEffect } from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import './styles/normalize.css';
import './styles/App.css';

const App = () => {
  const [countriesArray, setCountriesArray] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then((response) => response.json())
      .then((data) => setCountriesArray(data));
  }, []);

  return (
    <div className='App'>
      <Header />
      {countriesArray.length ? (
        <Quiz countriesArray={countriesArray} />
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default App;
