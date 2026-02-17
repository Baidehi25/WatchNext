import React from 'react'

const Footer = () => {
    return (

        <div className="bg-black text-white py-16 mt-24 border-t border-white/10">
            <div className="flex flex-col items-center text-center -mt-8">
                <p className="text-xs tracking-widest text-white/40 uppercase">
                    Built with
                </p>
                <div className="flex justify-center mt-4 gap-8 text-sm text-white/70">
                    <span className="hover:text-[#E50914] transition">React</span>
                    <span className="hover:text-[#E50914] transition">FastAPI</span>
                    <span className="hover:text-[#E50914] transition">Python</span>
                    <span className="hover:text-[#E50914] transition">OMDb API</span>
                </div>
            </div>
        </div>

    )
}

export default Footer
