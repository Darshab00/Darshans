import React from 'react';
import logo from './Chaps-PA1.webp';
import HomeIcon from '@mui/icons-material/Home';
import './Caphsnav.css';
import Nav from 'react-bootstrap/Nav';

function NavScrollExample() {
  return (
    <>
    <Nav>
        <a href='idex.html'><img src={logo} height={'100px'} width={'250px'}/></a>

        <div>
            <ul id='navbar'>
                    <li><a href='index.html'><HomeIcon/></a></li>
                    <li><a href='index.html'>MIXERS+SPEAKERS</a></li>
                    <li><a href='index.html'>GALLERY</a></li>
                    <li><a href='index.html'>BLOG</a></li>
                    <li><a href='index.html'>FAQ</a></li>
                    <li><a href='index.html'>CONTACT</a></li>
            </ul>
        </div>
    </Nav>
    </>
  )
  }
export default NavScrollExample;