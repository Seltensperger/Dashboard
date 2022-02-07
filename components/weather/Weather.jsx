import React from 'react'
import './weather.css'

export default function Weather() {
    return (
        <div className="weather">
            <div className="weatherItem">
                <span className="weathertemp">12°</span>
                <div className="weatherContainer">
                    <span className="weatherCity">LILLE</span>
                
                     <span className="weatherSub"> <img src="meteo1.png" alt="" /></span>
                </div>
            </div>
            <div className="weatherItem">
                <span className="weathertemp">15°</span>
                <div className="weatherContainer">
                    <span className="weatherCity">PARIS</span>
                    <span className="weatherSub"> <img src="meteo1.png" alt="" /></span>
                </div>
            </div>
            <div className="weatherItem">
                <span className="weathertemp">20°</span>
                <div className="weatherContainer">
                    <span className="weatherCity">MARSEILLE</span>
                    <span className="weatherSub"> <img src="meteo1.png" alt="" /></span>
                </div>
            </div>
        </div>
    )
}



    