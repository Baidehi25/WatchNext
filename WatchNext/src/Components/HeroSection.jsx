import React from 'react'
import BackgroundCarousel from './BackgroundCarousel'
import { forwardRef } from 'react';

const HeroSection = forwardRef(({scrolltotry}, ref) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center" ref={ref}>
            <BackgroundCarousel />
            <div className="relative z-10 text-center text-white">
                <h1 className="text-[60px]/18 font-bold mt-13 ">Not sure what's next? <br/> Just <span className="text-[#E50914]">WatchNext</span></h1>
                <h3 className="text-[18px] mt-4 px-6 sm:px-20 lg:px-60 text-center">Discover movies fans naturally watch together using pattern-driven recommendations. WatchNext studies real viewing habits to uncover hidden relationships between films, helping you move effortlessly from one great story to the next.</h3>
                <button className="mt-7 bg-[#E50914] text-white px-6 py-3 rounded-[25px] cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 ease-in-out" onClick={scrolltotry}><p className='text-[18px]'>Try Now</p></button>
            </div>            
        </section>
    )
})

export default HeroSection
