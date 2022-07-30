import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">Play List</button>
                </div>
                <h1 className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa commodi unde ipsum, temporibus quos dolores est doloremque, culpa rerum fugit quam. Quisquam reprehenderit facere sit. Velit pariatur dolore illo illum!</h1>
            </div>
            <div className="fade_button">
                
            </div>
        </div>
    )
}

export default Banner
