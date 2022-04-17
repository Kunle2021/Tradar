import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card, CardContent, Box, Button } from "@mui/material";
import { TextField } from "formik-mui";

// Need to pass the values as props and split the form

const Signup = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const stepTwoValidationSchema = Yup.object({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
    postcode: Yup.string().required().label("Postcode"),
    company: Yup.string().required().label("Company"),
    name: Yup.string().required().label("Name"),
  });

  const bagRef = useRef();

  // As initial values are set to props.data the values when you change form the data is still saved
  return (
    <div>
      {/* <Card>
        <CardContent> */}
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={stepTwoValidationSchema}
        innerRef={bagRef}
      >
        {({}) => (
          <Form autoComplete="off">
            <Box paddingBottom={2}>
              <Field component={TextField} name="name" label="Name" />
            </Box>

            <Box paddingBottom={2}>
              <Field component={TextField} name="company" label="Company" />
            </Box>

            <Box paddingBottom={2}>
              <Field component={TextField} name="email" label="Email" />
            </Box>

            <Box paddingBottom={2}>
              <Field
                component={TextField}
                name="password"
                label="Password"
                type="password"
              />
            </Box>

            {/* Need to make password with ..... */}

            <Box paddingBottom={2}>
              <Field component={TextField} name="postcode" label="Postcode" />
            </Box>
            <div>
              <Button type="submit" variant="contained" color="primary">
                Next
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="w-100 text-center mt-2">
        {/* Already have an account? <Link to="/login">Log In</Link> */}
      </div>
      {/* </CardContent>
      </Card> */}
    </div>
  );
};

export default Signup;

//
//
