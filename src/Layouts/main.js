import React from "react";
import { Header } from "../Components/Header/header";
import { MainAdversting } from "../Components/MainAdversting/mainAdversting";
import { Footer } from "../Components/Footer/footer";
import { StepContainer } from "../StepChnager/StepContainer/stepContainer";

import "./layout.css";

export const Main = () => {
  return (
    <div>
      <div className="mainLayout">
        <Header />
        <StepContainer />
      </div>
    </div>
  );
};
