import React from 'react'
import img1 from '../images/illustration-laptop-mobile.svg'
import img2 from '../images/illustration-laptop-desktop.svg'

function Services() {
    return (
        <div>
            <img className='absolute mt-auto ' src={img1} alt="mobile" />
            <img className='absolute mt-96 sr-only' src={img2} alt="desktop" />
            
        </div>
    )
}

export default Services