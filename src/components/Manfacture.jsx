import React from 'react'
import img1 from '../images/illustration-phones.svg'
import img2 from '../images/bg-pattern-circles.svg'

function Manfacture() {
    return (
        <div className='md:mt-32'>
            <div className='px-4 mt-20'>
                <img className='absolute left-0 md:w-full md:h-2/6 md:mt-56' src={img2} alt="background" />
                <img className='absolute  left-0 mt-32 mb-10 ' src={img1} alt="mobile" />
                
            </div>



            <div className='float-right '>
                <h1 className='absolute float-right text-2xl md:text-3xl text-center'>State of the Art infrastraucure</h1>
            </div>
        
        </div>
    )
}

export default Manfacture