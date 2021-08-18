import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import Photo from "./assets/image/Abiodun.jpg"
import GLogo from "./assets/image/google-logo.svg"
import Search from './components/Search';
import axios from 'axios';

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

  // this function is used to display the data using dangerouslySetInnerHTML
  const createMarkup = () => {
    return {__html: result};
  }

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
          <header className="flex justify-end items-center pt-4 pr-5">
            <a className="text-sm hover:underline" href="/">Gmail</a>
            <a className="text-sm mx-1 sm:mx-2 hover:underline" href="/">Image</a>
            <a className="rounded-full p-1 mx-2 sm:mx-4 hover:bg-gray-100" href="/"><CgMenuGridO color="gray" size="28" /></a>
            <a href="/">
              <img src={Photo} alt="" className="w-8 h-8 rounded-full object-center" />
            </a>
          </header>
          <main className="flex flex-col items-center mt-5">
            <img src={GLogo} alt="" className="w-64" />
            <Search query={query} handleInput={handleInput} handleSubmit={handleSubmit} />
            <div className="text-sm">
              <p>Google offered in: <a href="/" className="hover:underline text-blue-900">Hausa</a> <a href="/" className="hover:underline text-blue-900">Igbo</a> <a href="/" className="hover:underline text-blue-900">Èdè Yorùbá</a> <a href="/" className="hover:underline text-blue-900">Nigerian Pidgin</a></p>
            </div>
        
          </main>
          <footer className="mt-auto">
            <p className="bg-gray-200 px-5 py-3 border-b border-gray-400 opacity-80">Nigeria</p>
            <div className="sm:flex justify-between bg-gray-200 px-5 py-3 opacity-70">
              <div className="text-center sm:text-left">
                <a className="hover:underline mr-4" href="/">Advertising</a>
                <a className="hover:underline mr-4" href="/">Business</a>
                <a className="hover:underline mr-4" href="/">About</a>
                <a className="hover:underline" href="/">How Search Works</a>
              </div>
              <div className="text-center sm:text-left mt-1 sm:mt-0">
                <a className="hover:underline" href="/">Privacy</a>
                <a className="hover:underline ml-4" href="/">Terms</a>
                <a className="hover:underline ml-4" href="/">Settings</a>
              </div>
            </div>
          </footer>
      
        </div> :
        (<div className="mt-12" dangerouslySetInnerHTML={createMarkup()} />)
      }
    </section>
  );
}

export default App;
