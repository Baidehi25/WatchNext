import React from 'react'

const Guide = () => {
  return (
    <div className='flex flex-col justify-center items-center m-30'>
        <h2 className='text-white text-[40px] font-bold mt-10'>How It Works</h2>
        <div className='mt-13 flex gap-15 text-white'>
            <div className='flex flex-col justify-center items-center mt-10'>
                <h1 className='bg-[#E50914] text-[30px] w-[45px] rounded-full text-center'>1</h1>
                <h3 className='text-[22px] m-4 w-[200px] text-center'>Enter your <br/>favourite movie</h3>
            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <h1 className='bg-[#E50914] text-[30px] w-[45px] rounded-full text-center'>2</h1>
                <h3 className='text-[22px] m-4 w-[190px] text-center'>Model decodes viewing patterns</h3>
            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <h1 className='bg-[#E50914] text-[30px] w-[45px] rounded-full text-center'>3</h1>
                <h3 className='text-[22px] m-4 w-[200px] text-center'>Get smarter recommendations</h3>
            </div>
        </div>
    </div>
  )
}

export default Guide
