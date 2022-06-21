import { useState, useEffect } from "react";
import { useGetCountry } from "./hooks/useGetCountry";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import "./styles/normalize.css";
import "./styles/App.css";

const App = () => {
  const [fetchCountry, countriesArray] = useGetCountry();
  const [showImage, setShowImage] = useState("show-image");

  useEffect(() => {
    fetchCountry();
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
