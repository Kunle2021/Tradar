import React, { useState } from "react";
import MultiStepForm from "./Multiform";
import Signin from "./signin";
import Signup from "./signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <Signin /> : <MultiStepForm />}
      <p onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </p>
    </div>
  );
};

export default Auth;

// {!index ? <Signin /> : <MultiStepForm />}
//       {/* <MultiStepForm/> */}
//       <p onClick={toggleIndex}>
//         {!index ? "New user? Click here " : "Already have an acount?"}
//       </p>thrr
