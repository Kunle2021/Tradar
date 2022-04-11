import React from "react";
import { useState } from "react";
import StepOne from "./StepOne";

export default function Form() {
  const [data, setData] = useState({
    firs_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="Form">
      <StepOne />
    </div>
  );
}
