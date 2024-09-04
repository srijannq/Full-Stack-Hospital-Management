import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className="banner">
            <img src={imageUrl} alt="aboutimage"/>
        </div>
        <div className="banner">
            <p>Biography</p>
            <h3>Who we are</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque odio alias rem provident, nesciunt eaque eveniet, praesentium quidem laboriosam in a. Totam nesciunt voluptatum quod sint esse tenetur, numquam autem tempora quos corporis debitis aspernatur velit. Quibusdam sed ea beatae autem reiciendis quis. Aspernatur optio excepturi tempora odio qui aliquid eum corporis cum omnis necessitatibus.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eius!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid pariatur nemo optio?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
    </div>
  )
}

export default Biography