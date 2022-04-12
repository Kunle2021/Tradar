import React, { useRef, useState } from "react";
import { Formik, Field } from "formik";

import { Form, Button, Card, Alert } from "react-bootstrap";

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

  return (
    <div>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        render={({ validate, errors }) => (
          <>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                  <Form.Group id="email">
                    <Form.Label>{props.data.email}</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  {/* <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordConfirmRef}
                      required
                      onChange={handleChange}
                    />
                  </Form.Group> */}
                  <Button disabled={loading} className="w-100" type="submit">
                    Next
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Already have an account?
            </div>
          </>
        )}
      />
    </div>
  );
};

export default StepOne;

//
//
