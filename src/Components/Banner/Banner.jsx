import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constant/constant'
import './Banner.css'
function Banner() {
    const [movie ,setMovie]=useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            const maxNumber = 10;
            const randomNumber = Math.floor((Math.random() * maxNumber) + 1);
            setMovie(response.data.results[randomNumber])
        })
        
    },[])
    return (
        <div style={{backgroundImage:`url(${movie?imageUrl+movie.poster_path:null})`}} className='banner'>
            <div className="content">
                <h1 className="title">{movie?movie.original_title?movie.title:movie.original_name:null}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">Play List</button>
                </div>
                <h1 className="description">{movie?movie.overview:null}</h1>
            </div>
            <div className="fade_button">

            </div>
        </div>
    )
}

export default Banner
