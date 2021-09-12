import React, { useEffect, useState } from 'react';
import StepWizard from 'react-step-wizard';
import { CurrrentStep } from '../../Components/CurrentStep/currentStep';
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

    useEffect(() => {
        if (quote.success) {
            console.log('uuxarkeci');
            console.log(quote);
        }
    },[quote.success])
    
    return (
        <div>
            <StepWizard>
                <StepDetector setCurrentStep={setCurrentStep} quote={quote} setValues={setValues} step={1}/>
                <StepDetector setCurrentStep={setCurrentStep} quote={quote} setValues={setValues} step={2}/>
                <StepDetector setCurrentStep={setCurrentStep} quote={quote} setValues={setValues} step={3}/>
                <StepDetector setCurrentStep={setCurrentStep} quote={quote} setValues={setValues} step={4}/>
            </StepWizard>
            {currentStep < 4 &&
            <CurrrentStep currentStep={currentStep}/>
            }
        </div>
    )
}