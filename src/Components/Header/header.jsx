import React, { useEffect, useState } from 'react';
import './style.css'
import Logo from '../../Assets/logo.png'
import { VPN } from '../../Constants/vpn';

export const Header = () => {
    const [currentVpn, setCurrentVpn] = useState()

    useEffect(() => {
        setCurrentVpn(VPN[Math.floor(Math.random() * 10)])
    },[])

    return (
        <div className='headerContainer'>
            <div className='vpnContainer'>
                <div className='vpn'>
                    Vpn in our page
                    </div>
                <div className='vpn'>
                    {currentVpn && currentVpn.country} : {currentVpn && currentVpn.code}
                    </div>
            </div>
            <div className='headrCenterInfo'>
                TEXT MTACI AXPERS
            </div>
            <div>
                <img src={Logo} className='logo' alt='logo' />
            </div>
        </div>
    )
}