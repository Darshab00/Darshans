import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <><ul>
    <li>Navbar</li>
    <li><NavLink activeclass='active_class' to='/'>About Us</NavLink></li>
    <br/><li>
    <NavLink activeclass='active_class' to='/contact'>Conact US</NavLink>
    </li>
    <br/><li>
    <NavLink activeclass='active_class' to='/'>About Us</NavLink>
    </li>
    </ul>
  </>
)}

export default Navbar