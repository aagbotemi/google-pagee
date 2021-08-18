import React from 'react'
import { CgMenuGridO } from 'react-icons/cg';
import Photo from "../assets/image/Abiodun.jpg"

export default function Header() {
    return (
        <header className="flex justify-end items-center pt-4 pr-5">
            <a className="text-sm hover:underline" href="/">Gmail</a>
            <a className="text-sm mx-1 sm:mx-2 hover:underline" href="/">Image</a>
            <a className="rounded-full p-1 mx-2 sm:mx-4 hover:bg-gray-100" href="/"><CgMenuGridO color="gray" size="28" /></a>
            <a href="/">
                <img src={Photo} alt="user passport" className="w-8 h-8 rounded-full object-center" />
            </a>
        </header>
    )
}
