import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container } from "react-bootstrap";
import { Form, Button, Card, Alert } from "react-bootstrap";

export default function App() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log("data", data);

  return <div className="App">{steps[currentStep]}</div>;
}

const stepOneValidationSchema = Yup.object({
  first_name: Yup.string().required().label("First name"),
  last_name: Yup.string().required().label("Last name"),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {<Alert variant="danger"></Alert>}
                <Form>
                  <Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required />
                  </Field>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  required />
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
                  <Button className="w-100" type="submit">
                    Next
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Already have an account?
            </div>
          </>

          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

const stepTwoValidationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <p>Email</p>
          <Field name="email" />
          <ErrorMessage name="email" />

          <p>Password</p>
          <Field name="password" />
          <ErrorMessage name="password" />

          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
