import React from 'react'

export default function Footer() {
    return (
        <footer className="mt-auto">
            <p className="bg-gray-200 px-5 py-3 border-b border-gray-300 opacity-80">Nigeria</p>
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
        
    )
}
