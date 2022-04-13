import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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
  };

  const stepTwoValidationSchema = Yup.object({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
  });

  // As initial values are set to props.data the values when you change form the data is still saved
  return (
    <div>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={stepTwoValidationSchema}
      >
        {({ handleSubmit, validate, errors }) => (
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
      </Formik>
    </div>
  );
};

export default StepOne;

//
//
