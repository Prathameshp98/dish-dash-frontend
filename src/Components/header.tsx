
import React from 'react'
import '../Assests/CSS/header.css'

import Logo from '../Assests/Images/dish.webp';

const Header: React.FC = () => {
  return (
    <div className='header-main'>
        <div className='header-inner'>
            <div className='header-title'>
                <img src={Logo} alt="" />
                <h1>DishDash</h1>
            </div>           
            <button>Contribute a dish</button>
        </div>
    </div>
  )
}

export default Header