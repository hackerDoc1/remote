import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import emailjs from 'emailjs-com'


export const LastStep = ({setValues,gotToNextStep,setCurrentStep,quote}) => {
    const [uuid, setUuid] = useState('')

    const generateID = () => {
        setUuid(uuidv4().substring(0,20))
    }
    const submitUuid = async() => {
        await setValues({
            uuid,
            success: true
        })
        gotToNextStep()
        // await emailjs.send("service_0vgm9ja", "template_ulyfef9", {
        //     date: new Date(),
        //     email: quote.email ? quote.email : '',
        //     from: quote.from ? quote.from : '',
        //     link: quote.link ? quote.link : '',
        //     uuid: uuid,
        // }, 'user_JIEnl8lZBVyndZm6jgYow');
        setCurrentStep(4)
    }
    
    return (
        <div className='flexible'>
        <div className='addEmailContainer'>
            {!uuid ?
            <div className='typeEmailText'>
                Generate your unique UUID
            </div>
            :
            <div className='typeEmailText'>
                Please submit quote to get more information
            </div>}
            <div className='emailInputContainer'>
                <input 
                value={uuid}
                readOnly
                className='emailInput'
                placeholder='UUID Unique code'
                type='text'/>
            </div>
            {!uuid ? 
            <div className='flexible'>
                <div className='nextButton' onClick={generateID} >
                    Generate
                </div>
            </div>
            :
            <div className='flexible'>
                <div className='nextButton' onClick={submitUuid} >
                    Submit
                </div>
            </div>}
        </div>
    </div>
    )
}