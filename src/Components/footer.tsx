
import React from 'react'

import '../Assests/CSS/footer.css';

import Facebook from '../Assests/Images/facebook.webp';
import Instagram from '../Assests/Images/instagram.webp';
import Linkedin from '../Assests/Images/linkedin.webp';
import Snapchat from '../Assests/Images/snapchat.webp';
import Twitter from '../Assests/Images/twitter.webp';

const Footer: React.FC = () => {
  return (
    <div className='footer-main'>
        <div className='footer-inner'>
            <div className='footer-inner-left'>
                <div className='img-container'>
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Snapchat} alt="" />
                    <img src={Twitter} alt="" />
                </div>
            </div>
            <div className='footer-inner-right'>
                <p>copyright &#169;Dish Dash</p>
            </div>
        </div>
    </div>
  )
}

export default Footer