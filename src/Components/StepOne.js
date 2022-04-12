import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Button, Card, Alert } from "react-bootstrap";

// Need to pass the values as props and split the form

const StepOne = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    props.next(values);
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        render={({ handleSubmit, validate, errors }) => (
          <Form>
          <p>Email</p>
          <Field name="email" />
          <ErrorMessage name="email" />

          <p>Password</p>
          <Field name="password" />
          <ErrorMessage name="password" />
          
          <button type="submit">Next</button>
        </Form>
        )}
      />
    </div>
  );
};

export default StepOne;

//
//
