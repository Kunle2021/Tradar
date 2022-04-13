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
    props.next(values, true);
  };

  return (
    <div>
      <Formik initialValues={props.data} onSubmit={handleSubmit}>
        {/* Line 24 renders the values from form and passes them into the onClick prev prop */}
        {({ values }) => (
          <Form>
            <p>Name</p>
            <Field name="name" />
            <ErrorMessage name="name" />

            <p>Company</p>
            <Field name="company" />
            <ErrorMessage name="company" />

            <button type="submit">Submit</button>
            <button type="button" onClick={() => props.prev(values)}>
              Back
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepOne;

//
//
