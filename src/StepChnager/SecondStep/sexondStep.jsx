import React, { useState } from 'react';
import NextIcon from '../../Assets/Vector.png'

export const SecondStep = React.memo(({setValues,gotToNextStep,setCurrentStep}) => {
    const [email,setEmail] = useState('')
    const [error, setError] = useState(null)

    const REGEXP = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    const submitEmail = () => {
        if (email && REGEXP.test(email)) {
            setValues({
                email
            })
            setError(null)
            gotToNextStep()
            setCurrentStep(3)
        }else{
            if (!email) {
                setError('Please fill in your email address')
            }else{
                setError('Please fill in the correct email address')
            }
        }
    }

    return (
        <div className='flexible'>
            <div className='addEmailContainer'>
                <div className='typeEmailText'>
                    Please type your Email address
                </div>
                <div className='emailInputContainer'>
                    <input 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className='emailInput'
                    placeholder='email@gmail.com'
                    type='text'/>
                </div>
                {error && <span className='erroMessage'>{error}</span>}
                <div className='flexible'>
                    <div className='nextButton' onClick={submitEmail}>
                        Next
                        <img className='nextIcon' src={NextIcon} alt="next" />
                    </div>
                </div>
            </div>
        </div>
    )
});