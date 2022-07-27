import React from 'react'

function Footer() {
    return (
        <div className='flex flex-col bg-gray-800 text-white pt-28 pb-10  rounded-t-full  text-center text-lg md:flex-row md:justify-around'>

            <div className='mb-4'>
                <p className='text-4xl font-extrabold'>Blogr</p>
            </div>

            <div>
                <ul>
                    <li><a className='text-lg font-bold' href='#home'>Product</a></li>
                    <li><a className='md:text-sm hover:underline' href='#home'>Overview</a></li>
                    <li><a className='md:text-sm hover:underline' href='#home'>Pricing</a></li>
                    <li><a className='md:text-sm hover:underline' href='#home'>Marketplace</a></li>
                    <li><a className='md:text-sm hover:underline' href='#home'>Features</a></li>
                    <li><a className='md:text-sm hover:underline' href='#home'>Integeration</a></li>
                </ul>
            </div>
            
            <div>
                <ul>
                    <li><a className='text-lg font-bold' href='#home'>Company</a></li>
                    <li><a className='md:text-sm hover:underline' href='#home'>About</a></li>
                    <li><a className='md:text-sm hover:underline' href='#home'>Team</a></li>
                    <li><a className='md:text-sm hover:underline' href='#home'>Blog</a></li>
                    <li><a className='md:text-sm hover:underline' href='#home'>Creator</a></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><a className='text-lg font-bold' href='#home'>Connect</a></li>
                    <li><a className='md:text-sm hover:underline' href='#home'>Connect</a></li>
                    <li><a className='md:text-sm hover:underline' href='#home'>News Letter</a></li>
                    <li><a className='md:text-sm hover:underline' href='#home'>Linkedin</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer