import { useState, useEffect } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import "./styles/normalize.css";
import "./styles/App.css";

const App = () => {
  const [countriesArray, setCountriesArray] = useState([]);
  const [showImage, setShowImage] = useState("show-image");

  useEffect(() => {
    fetch("https://restcountries.com/v3/all")
      .then((response) => response.json())
      .then((data) => setCountriesArray(data));
  }, []);

  return (
    <div className="App">
      <Header showImage={showImage} />
      {countriesArray.length ? (
        <Quiz countriesArray={countriesArray} setShowImage={setShowImage} />
      ) : (
        <p className="loading">...</p>
      )}
      <Footer />
    </div>
  );
};

export default App;
