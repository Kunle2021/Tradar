import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, CheckboxWithLabel } from "formik-mui";
import * as Yup from "yup";
import { Card, CardContent, Box, Button, Grid, Divider } from "@mui/material";

// Need to pass the values as props and split the form

const Signuptwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const stepTwoValidationSchema = Yup.object({
    experience: Yup.string().required().label("Provide number of years"),
    contact: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    policy: Yup.boolean().oneOf([true], "Message"),
  });

  const bagRef = useRef();

  return (
    <div>
      {/* <Card>
        <CardContent> */}
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={stepTwoValidationSchema}
        useRef={bagRef}
      >
        {/* Line 24 renders the values from form and passes them into the onClick prev prop */}
        {({ values }) => (
          <Form>
            <Box paddingBottom={2}>
              <Field
                component={TextField}
                name="contact"
                label="Contact Number"
              />
            </Box>

            <Grid item xs={12}>
              <Box paddingBottom={2}>
                <Field
                  type="number"
                  component={TextField}
                  name="experience"
                  label="Experience(years)"
                ></Field>
              </Box>
            </Grid>

            {/* Need to confifure this */}
            {/* <Box paddingBottom={2}>
                  <UploadFiles />
                </Box> */}
            {/* Store PDF certificate */}

            <Box paddingBottom={2}>
              <Field
                component={CheckboxWithLabel}
                Label={{ label: "Terms and Conditions" }}
                name="policy"
                type="checkbox"
              />
            </Box>
            <div className="text-center">
              <div>
                <Button
                  paddingBottom={2}
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={() => props.prev(values)}
                >
                  Back
                </Button>
              </div>
            </div>

            <Divider>
              <h4 style={{ textAlign: "center" }}>Or</h4>
            </Divider>

            <div className="text-center">
              <div>
                <Button
                  disabled={props.loading}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {/* </CardContent>
      </Card> */}
    </div>
  );
};

export default Signuptwo;

//
//
