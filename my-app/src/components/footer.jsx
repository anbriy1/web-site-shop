import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../images';
import '../App.css'; 

function Footer(){
    return(
        <footer className='footer-shop'>
        <div className='footer-text'>
            <p>©PCTRAXERS</p>
            <p>Политика конфиденциальности</p>
        </div>

        <div className='footer-image'>
         <img src={images.visa}/>
         <img src={images.mastercard} />
         <img src={images.myr}/>
         <img/> 
        </div>
        </footer>
    )
}

export default Footer;