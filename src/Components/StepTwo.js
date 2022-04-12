import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Card, Alert } from "react-bootstrap";

// Need to pass the values as props and split the form

export default function StepOne(props) {
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
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Formik
            initialValues={props.data}
            onSubmit={(handleSubmit) => {
              if (
                values.Company &&
                values.Experience &&
                values.Location &&
                values.Contact
              ) {
                console.log("Registration created!!");
              }
            }}
            render={({ values, errors }) => (
              <>
                <Form onSubmit={handleSubmit}>
                  <p>Email</p>
                  <Field name="email" />
                  <ErrorMessage name="email" />

                  <p>Password</p>
                  <Field name="password" />
                  <ErrorMessage name="password" />
                  <button type="button" onClick={() => props.prev(values)}>
                    Back
                  </button>
                  <button type="submit">Next</button>
                </Form>
                <div className="w-100 text-center mt-2">
                  Already have an account?
                </div>
              </>
            )}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

//export default StepOne;

//
//
