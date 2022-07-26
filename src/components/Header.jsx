import React from 'react'


function Header() {
    return (
        <div className='header px-4' >
            <h1 className='flex justify-center mb-10 text-white items-center pt-20 text-center text-4xl font-bold md:text-5xl'>
                A modern publishing platform
            </h1>
            <p className='text-center text-gray-300 text-xl md:text-2xl'>Grow your audience and build your online board</p>
            <div className='flex justify-center space-x-4 items-center mt-20'>
                <div className=' px-3 py-2 bg-white text-black font-bold rounded-2xl shadow-lg hover:bg-black hover:text-white'>
                    <button>Start for Free</button>
                </div>
                <div className='text-white px-3 py-2 ring-2 font-bold rounded-2xl shadow-lg hover:bg-white hover:text-black'>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Header