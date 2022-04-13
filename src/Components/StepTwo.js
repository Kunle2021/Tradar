import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, CheckboxWithLabel } from "formik-mui";
import * as Yup from "yup";
import { mixed, object, number } from "yup";
import {
  Card,
  CardContent,
  Box,
  Button,
  ButtonBase,
  ButtonGroup,
} from "@mui/material";

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

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const stepTwoValidationSchema = Yup.object({
    experience: Yup.string().required().label("Provide number of years"),
    contact: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    policy: Yup.boolean().oneOf([true], "Message"),
  });

  return (
    <div>
      <Card>
        <CardContent>
          <h2 className="text-center mb-4"></h2>
          <Formik
            initialValues={props.data}
            onSubmit={handleSubmit}
            validationSchema={stepTwoValidationSchema}
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

                <Box paddingBottom={2}>
                  <Field
                    type="number"
                    component={TextField}
                    name="experience"
                    label="Experience(years)"
                  ></Field>
                </Box>

                <Box paddingBottom={2}>
                  <Field
                    name="certificates"
                    component={TextField}
                    label="Input Certificates"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    component={CheckboxWithLabel}
                    Label={{ label: "Privacy Policy" }}
                    name="policy"
                  />
                </Box>

                <div>
                  <Button type="button" onClick={() => props.prev(values)}>
                    Back
                  </Button>
                </div>

                <div>
                  <Button type="submit">Submit</Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default StepOne;

//
//
