import React from 'react'

const Navbar = ({scrolltotry, scrolltohome, scrolltoabout}) => {

  

  return (
    <nav className="fixed top-7 z-50 flex justify-center w-full">
        <div className="flex justify-between items-center max-w-[700px] h-[60px] w-full px-8 py-2 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[25px] shadow-2xl ring-1 ring-white/40">
          <div className='cursor-text'><p className='font-bold text-[20px] text-[#E50914]'>WatchNext</p></div>
          <div className="flex gap-10 items-center">
            <p className='cursor-pointer text-white hover:text-[#E50914] transition-colors duration-300 ease-in-out' onClick={scrolltohome}>Home</p>
            <p className='cursor-pointer text-white hover:text-[#E50914] transition-colors duration-300 ease-in-out' onClick={scrolltoabout}>About</p>
            <a className='cursor-pointer text-white hover:text-[#E50914] transition-colors duration-300 ease-in-out' href="https://github.com/Baidehi25/WatchNext.git" target='_blank'>Github</a>
            <button className="bg-black text-white -ml-3 -mr-4 px-4 py-2 rounded-[18px] cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"><p className='text-[15px]' onClick={scrolltotry}>Try Now</p></button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar

