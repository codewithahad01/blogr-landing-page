import React from 'react'
import img1 from '../images/illustration-laptop-mobile.svg'
import img2 from '../images/illustration-laptop-desktop.svg'

function Services() {
    return (
        <div>
            <div>
                <img className=' mt-auto ' src={img1} alt="mobile" />
                <img className=' mt-96 sr-only' src={img2} alt="desktop" />
            </div>
            
            <div className='px-8'>
                <h2 className='text-3xl text-center px-8 font-bold mb-4 md:text-start'>Free, open, Simple</h2>
                <p className='text-lg mb-10'>Video provides a powerful way to help you prove your point. When you click Online Video,
                you can paste in the embed code for the video you want to add. You can also type a keyword to 
                search online for the video that best fits your document.To make your document look professionally produced, 
                Word provides header, footer, cover page, and text box designs that complement each other.</p>
            </div>
            
            <div className='px-8'>        
                <h2 className='text-3xl text-center px-8 font-bold mb-4 md:text-start'>Powerful tooling</h2>
                <p className='text-lg mb-10'>Video provides a powerful way to help you prove your point. When you click Online Video,
                you can paste in the embed code for the video you want to add. You can also type a keyword to 
                search online for the video that best fits your document.</p>
            </div>
            
        </div>
    )
}

export default Services