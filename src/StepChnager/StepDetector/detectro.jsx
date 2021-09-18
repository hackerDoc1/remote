import React from "react";
import { Confirmation } from "../Confirmation/confirmation";
import { LastStep } from "../LastStep/lastStep";
import { MainStep } from "../MainStep/mainStep";
import { SecondStep } from "../SecondStep/sexondStep";


export const StepDetector = ({step,nextStep, setValues,quote,setCurrentStep}) => {
    if(step === 1 ){
        return (
            <MainStep setCurrentStep={setCurrentStep} setValues={setValues} gotToNextStep={nextStep}/>
        )
    }
    if(step === 2) {
        return (
            <SecondStep setCurrentStep={setCurrentStep} setValues={setValues} gotToNextStep={nextStep}/>
        )
    }
    if (step === 3) {
        return (
            <LastStep quote={quote} setCurrentStep={setCurrentStep} setValues={setValues} gotToNextStep={nextStep}/>
        )
    }
    if (step === 4) {
        return(
            <Confirmation  quote={quote}/>
        )
    }
}