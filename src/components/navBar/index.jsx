import React from 'react'
import "./style.css"

export default function index() {
    return (
        <div className="navContainer">
           <ul>
               <li><span className="entypo-home"></span>Home</li>
               <li><span className="entypo-mail"></span>Messages</li>
               <li><span className="entypo-star"></span>Whishlist</li>
               <li><span className="entypo-cog"></span>Settings</li>
               <li><span className="entypo-user"></span>My Account</li>
           </ul> 
        </div>
    )
}
