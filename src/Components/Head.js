import React from "react"
import './homepage.css'
import logo from './logo.png'
import group from './smalllogo/group.jpg'
import heart from './smalllogo/heart.jpg'
import account from './smalllogo/account.jpg'
import cart from './smalllogo/cart.jpg'


function Head () {
    
    return <div className="header">
         <input className="search e"   placeholder="Search"  />
         <div className="second"> <img src={logo} className="logo e" /> </div>
         <div className="right e">
         <img src={group} className="img" />
         <img src={heart} className="img" />
         <img src={account} className="img" />
         <img src={cart} className="img" />
         </div>
    </div>
}
export default Head