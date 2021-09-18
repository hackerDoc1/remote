import React, { useEffect } from "react";
import SUCCESS from '../../Assets/success.png'

export const Confirmation = ({quote}) => {

    return (
        <div className='flexible'>
            <div className='confirmationContainer'>
                <div className='confirmationHeader'>
                    Your quote submitted successfully
                </div>
                <div className='flexible'>
                    <div className='confirmationtext'>
                        Please check your email for get more information about your quote 
                    </div>
                </div>
                <div className='confirmationEmail'>
                    {quote && quote.email && quote.email}
                </div>
                <div className='successIcon'>
                    <img src={SUCCESS} alt="success" />
                </div>
            </div>
        </div>
    )
}