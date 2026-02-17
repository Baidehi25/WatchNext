import React from 'react'
import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
    return (
        <div className='flex flex-col justify-center items-center m-30' id='about' ref={ref}>
            <h2 className='text-[#E50914] text-[40px] font-bold'>About WatchNext</h2>
            <p className='text-white/80 text-[20px] mt-13 text-center max-w-2xl mx-auto'>
                WatchNext is a machine learning powered movie recommendation system that uses <span className='text-[#E50914]'>association rule mining</span> to identify relationships between films based on user viewing behaviour.
                <br/>
                Unlike traditional recommendation systems that rely heavily on ratings or popularity metrics, WatchNext focuses on <span className='text-[#E50914]'>discovering hidden co-watching patterns</span>. This approach helps generate recommendations that better reflect how audiences actually consume content.
                <br/>
                The project explores the intersection of <span className='text-[#E50914]'>data mining, user behaviour analysis</span>, and <span className='text-[#E50914]'>modern UI design</span> to create a more intuitive movie discovery experience.
            </p>
        </div>
    )
})

export default About
