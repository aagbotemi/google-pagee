import React from 'react'
import GMic from "../assets/image/google-mic.svg"
import { MdSearch } from 'react-icons/md';

const Search = ({ query, handleInput, handleSubmit }) => {
    
    return (
        <div className="mt-5">
            <form onSubmit={ handleSubmit } className="relative">
                <div className="form-group">
                    <input
                        type="text"
                        value={query}
                        onChange={handleInput}
                        className="border rounded-3xl outline-none  py-2 px-8 focus:shadow-md input-width"
                    />
                </div>
                <MdSearch size="20" className="absolute fill-current text-gray-400 left-3 top-3" />
                <a href="/">
                    <img src={GMic} className="w-4 absolute right-4 top-3" alt="google-mic" />
                </a>
            <div className="flex justify-center my-7">
                    
                <button type="submit" className="bg-gray-100 px-4 py-2 rounded text-sm text-gray-800 hover:shadow-md border border-transparent hover:border-gray-300 mr-1" href="/">Google Search</button>
                <a className="bg-gray-100 px-4 py-2 rounded text-sm text-gray-800 hover:shadow-md border border-transparent hover:border-gray-300 ml-1" href="https://perfects.engineering" target="_blank" rel="noreferrer">I'm Feeling Lucky</a>
            </div>
            
        </form>
    </div>
    )
}

export default Search
