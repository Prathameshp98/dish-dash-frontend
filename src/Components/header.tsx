
import React from 'react'
import '../Assests/CSS/header.css'

import Logo from '../Assests/Images/dish.webp';

const Header: React.FC = () => {
  return (
    <div className='header-main'>
        <div className='header-inner'>
            <img src={Logo} alt="" />
            <button>Contribute a dish</button>
        </div>
    </div>
  )
}

export default Header