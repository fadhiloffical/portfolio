
import React, {useState} from 'react';

import {NavLink} from 'react-router-dom';

import logo from '../../../assets/img/logo.png';

import fb from '../../../assets/img/fb.png';
import git from '../../../assets/img/git.png';
import ig from '../../../assets/img/ig.png';
import li from '../../../assets/img/li.png';


import './Hamburger.css';

const Hamburger = () => {

    const [showMenu, setShowMenu] = useState(false);
    return ( 
      <>
      <input id="burger" type="checkbox" checked={showMenu}  />
      
      
      <label  onClick={()=>setShowMenu(!showMenu)}>
          <span></span>
          <span></span>
          <span></span>
      </label>
 
      <div className="logo">
      <NavLink to="/" ><img src={logo} alt="Logo" /></NavLink>
      </div>
      
      
      <nav>    
        <ul>
          <li onClick={()=>setShowMenu(!showMenu)}><NavLink exact to="/" >Home</NavLink></li>
          <li onClick={()=>setShowMenu(!showMenu)}><NavLink exact to="/portfolio" >Portfolio</NavLink></li>
          <li onClick={()=>setShowMenu(!showMenu)}><NavLink exact to="/about" >About</NavLink></li>
          <li onClick={()=>setShowMenu(!showMenu)}><NavLink exact to="/contact" >Contact</NavLink></li>
          <li>
            <ul className="social">
              <li>
                <a href="https://github.com/fadhil-sweans" target="_blank" rel="noopener noreferrer">
                  <img src={git} alt="Github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/fadhil-asharaf/" target="_blank" rel="noopener noreferrer">
                  <img src={li} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cyber_bone/" target="_blank" rel="noopener noreferrer">
                  <img src={ig} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/fadhilonly" target="_blank" rel="noopener noreferrer">
                  <img src={fb} alt="Facebook" />
                </a>
              </li>
          </ul>
          </li>
        </ul>  
        
      </nav>


      </>
     );
}
 
export default Hamburger;