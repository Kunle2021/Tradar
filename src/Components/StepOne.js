import React, { useRef, useState } from "react";
import { Formik, Field } from "formik";

import { Form, Button, Card, Alert } from "react-bootstrap";

// Need to pass the values as props and split the form

export default function StepOne() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        onSubmit={(values) => {
          if (values.firstName && values.lastName) {
            console.log("form submission complete!!");
          }
        }}
        render={({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
        }) => (
          <>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordConfirmRef}
                      required
                    />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">
                    Sign Up
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
}

//export default StepOne;

//
//
