import React from 'react';
import './styles.css'


export const CurrrentStep = ({currentStep}) => {
    const steps = [1,2,3]
    return (
        <div className='currentStepContainer'>
            <div className='stepMain'>
            {steps.map((element,index) => {
                return (
                    <div key={index} className={`step ${currentStep === element && 'active'}`}>
                        <div className={`stepNumber ${currentStep === element && 'activeNumber'}`} >
                            {element}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}