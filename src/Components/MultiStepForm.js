import { useState, useRef } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Container } from "react-bootstrap";

export default function MultiStepForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    experience: "", //dropdown in years
    location: "",
    contact: "",
    certificates: "",
    policy: false,
  });

  const [currentStep, setCurrentStep] = useState(0);

  //Allows you to go back and foward within the form without losing data
  // const handleNextStep = (newData) => {
  //   console.log(newData);
  //   setData((prev) => ({ ...prev, ...newData }));
  //   setCurrentStep((prev) => prev + 1);
  // };

  //May need to abstract the API request
  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

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
