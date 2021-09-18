import React from 'react';
import './styles.css'



export const MainAdversting = ({currentStep}) => {
    return (
        <div className='adversitngContainer' style={{display: `${currentStep ===4 ? 'none' : 'flex'}`}}>
            <div className='adversting'>
                <div className='adverstingtext'>
                    <p>We are hacking social networks using instant API requests for password reset</p>
                    <p>If your target goes online within 4-6 hours after payment, we give 100% hacking guarantee</p>
                    <p>We will send you Login and Password of your target</p>
                </div>
            </div>
        </div>
    )
}