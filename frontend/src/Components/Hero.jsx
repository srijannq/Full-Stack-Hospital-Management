import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    <div className='hero container'>
        <div className='banner'>
            <h1>{title}</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste incidunt facilis, libero voluptates amet laboriosam, blanditiis officia consequatur unde a sit! Magnam animi eligendi enim a illo accusamus, est placeat?
            </p>
        </div>
        <div className="banner">
            <img src={imageUrl} alt="hero" className='animated-image'/>
            <span>
                <img src="./Vector.png" alt="vector"></img>
            </span>
        </div>
    </div>
  )
}

export default Hero