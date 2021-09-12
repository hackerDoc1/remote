import React, {useState } from 'react'
import '../StepContainer/style.css'
import FB from '../../Assets/FB.png'
import INSTA from '../../Assets/instaIcon.png'


export const MainStep = ({gotToNextStep,setValues,setCurrentStep}) => {
    const [fbValue, setFbValue] = useState('');
    const [instValue, setInstValue] = useState('')
    const [error, setError] = useState(null);

    const addCurrentLink = (event) => {
        const current = event.currentTarget.dataset.current
        if(current === 'Instagram' && !instValue){
            setError({
                error: current,
                message: 'Please fill in the Instagram field'
            })
        }else if(current === 'Facebook' && !fbValue){
            setError({
                error: current,
                message: 'Please fill in the Facebook field'
            })
        }else{
            setValues({
                from: current,
                link: current === 'Instagram' ? instValue : fbValue,
            })            
            gotToNextStep()
            setCurrentStep(2)
        }
    }

    return (
        <div className='firstStepMain'>
            <div className='currentHack'>
                <div className='hackNaming'>
                    Facebook
                </div>
                <div className='iconsCOntainer'>
                    <img className='icons' src={FB} alt="fb" />
                </div>
                <div className='flexible'>
                    <input onChange={(e) => setFbValue(e.target.value)} value={fbValue} 
                    type="text" className='hackInput' placeholder='https://www.facebook.com/example' />
                </div>
                {(error && error.error === 'Facebook') && <span className='erroMessage'>{error.message}</span>}
                <div className='flexible'>
                    <div data-current='Facebook' onClick={addCurrentLink} className='hackGetButton'>
                         Get
                    </div>
                </div>
            </div>
            <div className='currentHack'>
            <div className='hackNaming'>
                    Instagram
                </div>
                <div className='iconsCOntainer'>
                    <img className='icons' src={INSTA} alt="fb" />
                </div>
                <div className='flexible'>
                    <input onChange={(e) => setInstValue(e.target.value)} value={instValue}
                     type="text" className='hackInput' placeholder='https://www.instagram.com/example' />
                </div>
                {(error && error.error === 'Instagram') && <span className='erroMessage'>{error.message}</span>}
                <div className='flexible'>
                    <div data-current='Instagram' onClick={addCurrentLink} className='hackGetButton'>
                         Get
                    </div>
                </div>
            </div>
        </div>
    )
}