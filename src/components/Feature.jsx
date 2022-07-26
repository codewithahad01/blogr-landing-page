import React from 'react'
import img1 from '../images/illustration-editor-desktop.svg'

function Feature() {
    const bgStyle = {
        backgroundImage: 'url("./images/icon-arrow-light.svg")'
    }
    return (
        <div className='' style={bgStyle}>
            <p className='text-3xl text-center mt-10 font-bold md:text-3xl lg:text-4xl'>Designed for the future</p>
        
        <div className=''>
            <img src={img1} alt='bg1' />
        </div>
    
        </div>
    )
}

export default Feature