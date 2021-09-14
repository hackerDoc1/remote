import React from 'react';
import './footer.css'
import CRYPTO from '../../Assets/crypto.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerText'>We only accept Bitcoin payments</div>
            <img src={CRYPTO} alt="CRYPTO" className='crypto'/>
        </div>
    )
}