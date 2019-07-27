import React from 'react'
import './style.css'
export default function index() {
    return (
        <div className="generalContainer">
        <div className="containerButton">
            <div className="button">
                <span className='entypo-check'></span>
            </div>
        </div>
        <div className="container">
        <div className="date">
        <span>Monday 10<sup>th</sup></span>
        <span>2:23 PM</span>
        </div>
        <div className="location">
        <span>Houston TX, 33412</span>
        <span className="entypo-down-open"></span>
        <span>ATLANTA GA, 30123</span>
        </div>
        <div className="imagen">
        <span className="entypo-flight"></span>
        </div>
        <div className="price">
        <span>$250</span>
        </div>
        
        </div></div>
    )
}
