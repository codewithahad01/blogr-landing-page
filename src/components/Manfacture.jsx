import React from 'react'
import img1 from '../images/illustration-phones.svg'

function Manfacture() {
    return (
        <div className='md:flex p-6 md:justify-center md:items-center'>
            
            <div className=''>
                <img className='mt-32 mb-10' src={img1} alt="mobile" />
            </div>

            <div className='bg-blue-900   rounded-xl animate-bounce md:float-right'>
                {/* <h1 className='pb-10 text-white float-right text-2xl md:text-3xl '>State of the Art infrastraucure</h1> */}
                <p className='text-white text-center p-4 rounded-lg'>You can also type a keyword to 
                search online for the video that best fits your document.To make your document look professionally produced, 
                Word provides header.</p>
            </div>
        
        </div>
    )
}

export default Manfacture