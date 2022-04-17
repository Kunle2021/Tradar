import React, { useState } from "react";
import Signuptwo from "./signuptwo";
import Signup from "./signup";
import { useUserContext } from "../context/userContext";

export default function MultiStepForm() {
  const { registerUser } = useUserContext();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    experience: "", //dropdown in years
    location: "",
    contact: "",
    // certificate: "",
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
  async function makeRequest(formData) {
    const femail = formData.email;
    const fpassword = formData.password;
    console.log(femail);
    console.log(fpassword);

    try {
      await registerUser(femail, fpassword);
      console.log("Form Submitted", femail, fpassword);
    } catch (error) {
      alert("Error occured during Sign Up");
      console.log(error);
    }
  }

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
    <Signup next={handleNextStep} data={data} />,
    <Signuptwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return (
    <div className="Form">
      <div>{steps[currentStep]}</div>
    </div>
  );
}

// Need to pass the values as props and split the form
