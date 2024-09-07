"use client"
import React from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const {theme, setTheme} = useTheme();

  return (
    <header className='flex items-centre justify-between text-white mt-12 px-6 py-3 bg-transparent h-16 max-w-5xl mx-auto'>
        <span></span>
        <button 
        onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}
        className='px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-md font-semibold uppercase '>
          {theme === "dark" ? "light" :"dark" }
        </button>
    </header>
  )
}

export default Header