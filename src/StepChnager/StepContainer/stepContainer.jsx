import React, {useState } from 'react';
import StepWizard from 'react-step-wizard';
import { CurrrentStep } from '../../Components/CurrentStep/currentStep';
import { MainAdversting } from '../../Components/MainAdversting/mainAdversting';
import { StepDetector } from '../StepDetector/detectro';


export const StepContainer = () => {
    const [quote, setQuote] = useState({})
    const [currentStep, setCurrentStep] = useState(1)
    const setValues = (arg) =>{
        setQuote({
            ...quote,
            ...arg
        })
    }
    
    return (
        <div>
            <div className='main' style={{height: `${currentStep === 4 ? '100vh' : 'auto'}`}} >
        <MainAdversting currentStep={currentStep} />
            <StepWizard>
                <StepDetector setCurrentStep={setCurrentStep} quote={quote} setValues={setValues} step={1}/>
                <StepDetector setCurrentStep={setCurrentStep} quote={quote} setValues={setValues} step={2}/>
                <StepDetector setCurrentStep={setCurrentStep} quote={quote} setValues={setValues} step={3}/>
                <StepDetector setCurrentStep={setCurrentStep} quote={quote} setValues={setValues} step={4}/>
            </StepWizard>
            </div>
            {currentStep < 4 &&
            <CurrrentStep currentStep={currentStep}/>
            }
                          
        </div>
    )
}