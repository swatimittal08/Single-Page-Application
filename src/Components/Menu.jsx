import React from 'react'
import style from "./navbar.module.css"
import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <div id={style.menuBlock}>
        <ol>
            <li><Link to="/explore">Explore Work</Link></li> 
            <li><Link to="/hire">Hire Talents</Link></li>
            <li><Link to="/challenges">Challenges</Link></li>
        </ol>    
    </div>
  )
}

export default Menu 