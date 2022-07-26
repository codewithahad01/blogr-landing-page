import React from 'react'
import { useState } from 'react'

function Navbar() {
    const [navbar, setNavbar] = useState(false)
    return (
        <nav className="w-full bg-transparent mt-4 h-full">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="#logout">
                            <h2 className="text-3xl p-6 text-black font-extrabold md:text-3xl lg:text-4xl">Blogr</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-800 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 md:justify-start  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                    {/* {navigation.map(item => (  */}
                        <ul className=" text-lg items-center  justify-center  space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-900  hover:underline">
                                <a href="#home">Practice</a>
                            </li>
                            <li className="text-gray-900 hover:underline">
                                <a href="#blog">Company</a>
                            </li>
                            <li className="text-gray-900 hover:underline">
                                <a href="#about">Contact</a>
                            </li>
                            <div className='flex flex-col md:flex-row '>
                            <div className='md:mr-2 md:mt-1'>
                                <button className=' hover:ring-2 rounded-lg px-3'>Login</button>
                            </div>
                            
                            <div className='md:bg-black md:text-white md:px-2 md:py-1 py-3 rounded-lg  hover:bg-white hover:text-black hover:ring-2'>
                                <button>Sign up</button>
                            </div>
                            </div>
                                    </ul>
                                    
                                </div>
                            </div>
            </div>
        </nav>
    )
}

export default Navbar