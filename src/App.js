import React, { useState } from 'react';
import GLogo from "./assets/image/google-logo.svg"
import Search from './components/Search';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';
import HTMLReactParser from 'html-react-parser';

const proxy = "https://mighty-island-53594.herokuapp.com";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const url = `${proxy}/https://www.google.com/search?q=${query}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setResult(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  //input the item you want to search
  const handleInput = (e) => {
    setQuery(e.target.value)
  }

  //handles the search you submit for search
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData()
  }

  return (
    <section>
      { (!result.length) ?
        <div className="h-screen flex flex-col">
          <Header />
          <main className="flex flex-col items-center mt-5">
            <img src={GLogo} alt="logo" className="w-64" />
            <Search query={query} handleInput={handleInput} handleSubmit={handleSubmit} />
            <div className="text-sm">
              <p>Google offered in: <a href="/" className="hover:underline text-blue-900">Hausa</a> <a href="/" className="hover:underline text-blue-900">Igbo</a> <a href="/" className="hover:underline text-blue-900">Èdè Yorùbá</a> <a href="/" className="hover:underline text-blue-900">Nigerian Pidgin</a></p>
            </div>
          </main>
          <Footer />
        </div> :
        <>{HTMLReactParser(result)}</>
      }
    </section>
  );
}

export default App;
