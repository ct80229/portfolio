import React from 'react'
import './Nav.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Nav = () => {
  
  return (
    <div className = 'navbar' >
        <ul className = 'menu'>
            <li> <AnchorLink className = "anchor-link" offset = {50} href = '#body'> <p>home</p> </AnchorLink></li>
            <li> <AnchorLink className = "anchor-link" offset = {50} href = '#about'> <p>about</p> </AnchorLink> </li>
            <li> <AnchorLink className = "anchor-link" offset = {50} href = '#project'> <p>projects</p> </AnchorLink> </li>
        </ul>
    </div>
  )
}

export default Nav