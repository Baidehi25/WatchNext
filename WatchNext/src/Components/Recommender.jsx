import React from 'react'
import { forwardRef } from 'react';

const Recommender = forwardRef((props, ref) => {

    const [status,setStatus]=useState('idle') // 'idle', 'loading', 'success', 'error'
    const [movie,setMovie]=useState('') //user input for movie name
    const [recommendation,setRecommendation]=useState(null) //recommended movie details

    const handleRecommend=()={
        
    }

    return (
        <div ref={ref}>
            <section>
                <div className='flex flex-col justify-center items-center m-30'>
                    <h2 className='text-white text-[40px] font-bold mt-10 text-center'>Find Your Next Binge</h2>
                    <div className='mt-8. text-white text-center w-[500px]  p-16 flex flex-col justify-center items-center gap-10'>
                        <div className='flex gap-4 text-[22px] justify-center items-center'>
                            <p className='text-[#E50914] font-semibold tracking-wide'>MOVIE :</p>
                            <input type="text" placeholder='Enter a movie...' className='w-[200px] bg-transparent border-b-2 border-white/50 focus:outline-none focus:border-white' />
                        </div>
                        <button className='w-[200px] py-2.5 bg-[#E50914] rounded-[25px] hover:bg-white hover:text-black cursor-pointer transition-colors duration-300'>Recommend</button>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-white text-[24px] font-semibold -mt-28'>Take a crack at this!</h3>
                    <div className='flex m-8 rounded-[25px] p-10 gap-8 border border-white/10 rounded-[25px] shadow-lg ring-1 ring-white/40 shadow-white/10 max-w-[780px]'>
                        <img src="/posters/poster1.jpg" alt="" className='rounded-[15px]'/>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-[#E50914] text-[28px] font-semibold'>Movie Title <span>(2000)</span></h4>
                            <p className='text-white/50 text-[17px] -mt-1.5'>Genre • Runtime</p>
                            <p className='text-white mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className='text-white mt-2'>IMDB Rating: 8.5/10</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
})

export default Recommender
