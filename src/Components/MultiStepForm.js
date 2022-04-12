import { useState, useRef } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Container } from "react-bootstrap";
import { Formik, Field } from "formik";
import { Form, Button, Card, Alert } from "react-bootstrap";

export default function MultiStepForm() {
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
    console.log(newData);
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  //Iterations

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log(data);

  return (
    <div className="FirstForm">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {steps[currentStep]}
        </div>
      </Container>
    </div>
  );
}

// Need to pass the values as props and split the form
