import React from 'react'
import img1 from '../images/illustration-editor-desktop.svg'
import img2 from '../images/illustration-editor-mobile.svg'

function Feature() {
    const bgStyle = {
        backgroundImage: 'url("./images/icon-arrow-light.svg")'
    }
    return (
        <div className='mt-20' style={bgStyle}>
            <p className='text-3xl text-center mt-10 font-bold md:text-3xl lg:text-4xl'>Designed for the future</p>
        
        <div className=''>
            <div>
                <img className='sr-only md:not-sr-only md:p-10 md:w-2/4 md:h-2/4 md:float-right ' src={img1} alt='desktop editor' />
                <img className='md:sr-only p-7' src={img2} alt='mobile editor' />
            </div>
            <div className='px-8 mt-16 flex flex-col justify-center md:p-20 '>
                <h2 className='text-3xl text-center px-8 font-bold mb-4 md:text-start'>Introuction to an intensible editor</h2>
                <p className='text-lg mb-10'>Video provides a powerful way to help you prove your point. When you click Online Video,
                you can paste in the embed code for the video you want to add. You can also type a keyword to 
                search online for the video that best fits your document.To make your document look professionally produced, 
                Word provides header, footer, cover page, and text box designs that complement each other. For example, you 
                can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the 
                different galleries.</p>

                <h2 className='text-3xl text-center px-8 font-bold mb-4 md:text-start'>Introuction to an intensible editor</h2>
                <p className='text-lg mb-10'>Video provides a powerful way to help you prove your point. When you click Online Video,
                you can paste in the embed code for the video you want to add. You can also type a keyword to 
                search online for the video that best fits your document.To make your document look professionally produced, 
                Word provides header.</p>
                

            </div>
        </div>
    
        </div>
    )
}

export default Feature