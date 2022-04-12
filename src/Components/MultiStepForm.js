import React from "react";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Container } from "react-bootstrap";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    Company: "",
    Experience: "", //dropdown in years
    Location: "",
    Contact: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  //Allows you to go back and foward within the form without losing data
  const handleNextStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return (
    <div className="FirstForm">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {steps[currentStep]}
        </div>
      </Container>
    </div>


  );

  
}
