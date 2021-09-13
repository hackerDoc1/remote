import React from "react";
import { Header } from "../Components/Header/header";
import { StepContainer } from "../StepChnager/StepContainer/stepContainer";
import {Footer} from '../Components/Footer/footer'
import "./layout.css";

export const Main = () => {
  return (
    <div className='rootConatiner'>
      <div className="mainLayout">
        <Header />
        <StepContainer />
      </div>
      <Footer/>
    </div>
  );
};
