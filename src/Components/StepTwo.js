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
          Company: "",
          Experience: "", //dropdown in years
          Location: "",
          Contact: "",
        }}
        onSubmit={(values) => {
          if (
            values.Company &&
            values.Experience &&
            values.Location &&
            values.Contact
          ) {
            console.log("Registration created!!");
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
                  <Form.Group id="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group id="experience">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group id="experience">
                    <Form.Label>Experience(Years)</Form.Label>
                    <Form.Control required onChange={handleChange} />
                    <select class="form-control" id="YearSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </Form.Group>

                  <Form.Group id="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group id="contact">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">
                    Back
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
