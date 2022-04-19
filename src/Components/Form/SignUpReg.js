import React, { useRef } from "react";

const SignUpReg = ({ formData, setFormData }) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   // const email = emailRef.current.value;
  //   // const name = nameRef.current.value;
  //   // const password = psdRef.current.value;
  //   // if (email && password && name) registerUser(email, password, name);
  // };

  return (
    <div className="form">
      <h2> New User</h2>
      <form>
        <input
          placeholder="Email"
          type="email"
          ref={emailRef}
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <input
          placeholder="Password"
          type="password"
          ref={nameRef}
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        <input
          placeholder="ConfirmPassword"
          type="password"
          ref={psdRef}
          value={formData.confirmPassword}
          onChange={(e) => {
            setFormData({ ...formData, confirmPassword: e.target.value });
          }}
        />
        {/* <button type="submit">Register</button> */}
      </form>
    </div>
  );
};

export default SignUpReg;
