import React from 'react'
import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Sidebar = () => {
  // will be used in next iteration
  const { theme, _setTheme, _chats, _setSelectedChat, _user } = useAppContext()
  const [search, setSearch] = useState("")


  return (
    <div className='flex flex-col h-screen min-w-72 p-5 dark:bg-gradient-to-b from-[#242124]/30 to-[#000000]/30 border-r border-[#80609f]/30 backdrop-blur-3xltransition-all duration-500 max-md:absolute left-0 z-10'>
      {/* {logo} */}
      <img src={theme === "dark" ? assets.logo_full : assets.logo_full_dark} alt="Logo" className='w-full max-w-48' />
      {/* New Chat Button */}
      <button className='flex justify-center items-center w-full py-2 mt-10 text-white bg-gradient-to-r from-[#A456F7] to-[#3D81F6] text-sm rounded-md cursor-pointer'>
        <span className='mr-2 text-xl'>+</span>New Chat
      </button>

      {/* Search Conversations */}
      <div className='flex items-center gap-2 p-3 mt-4 border border-gray-400 dark:border-white/20 rounded-md'>
        <img src={assets.search_icon} alt="Search" className='w-4 not-dark:invert' />
        <input type="text" placeholder='Search conversations...' className='text-xs placeholder:text-gray-400 outline-none' value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

    </div>
  )
}

export default Sidebar