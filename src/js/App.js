import React, { useState } from "react";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
// react bootstrap packege
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

export default function App() {
  // define rebar length constant and declare state for the minimum number of rebar
  const rebarLength = 12.0;
  const [result, setResult] = useState("");

  // define form initial values
  const initialValues = {
    length1: "",
    quantity1: "",
    length2: "",
    quantity2: "",
  };

  // yup validation schema for the form
  const validationSchema = Yup.object({
    length1: Yup.number("Length must be a number!")
      .required("Length 1 is required")
      .positive("Length must be positive!"),
    quantity1: Yup.number("Quantity must be a number!")
      .required("Quantity 1 is required")
      .positive("Quantity must be positive!")
      .integer("Quantity must be an integer!"),
    length2: Yup.number("Length must be a number!")
      .required("Length 2 is required")
      .positive("Length must be positive!"),
    quantity2: Yup.number("Quantity must be a number!")
      .required("Quantity 2 is required")
      .positive("Quantity must be positive!")
      .integer("Quantity must be an integer!"),
  });

  // define formik instance
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      calculateMinRebar(values, setSubmitting);
    },
  });
  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    setFieldValue,
    isValid,
    handleChange,
    handleBlur,
  } = formik;

  // define function that calculate the minimum rebar needed
  // @params values and object with all form values
  // setSubmitting: function to set the submitting value of the form
  const calculateMinRebar = (values, setSubmitting) => {
    setSubmitting(true);

    const minRebar =
      (values.length1 * values.quantity1 + values.length2 * values.quantity2) /
      rebarLength;
    console.log(minRebar);
    setResult(parseInt(minRebar) + 1);
    setSubmitting(false);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Justice Tech</Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid="sm" className="mt-3 pt-3">
        <Card
          className="col-md-10 col-lg-8 col-xl-7 mx-auto mt-3"
          border="primary"
        >
          <Card.Body>
            <Card.Title className="text-center mb-3">
              Minimum Rebar Needed Calculator
            </Card.Title>
            <FormikProvider value={formik}>
              <Form className="mt-3" noValidate onSubmit={handleSubmit}>
                <Stack gap={2} className="mt-3">
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="length1">
                      <Form.Label>Length 1</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Length 1"
                        step={0.1}
                        value={values.length1}
                        onChange={handleChange}
                        isInvalid={errors.length1 && touched.length1}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.length1 && touched.length1 && errors.length1}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="quantity1">
                      <Form.Label>Quantity 1</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Quantity 1"
                        value={values.quantity1}
                        onChange={handleChange}
                        isInvalid={errors.quantity1 && touched.quantity1}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.quantity1 &&
                          touched.quantity1 &&
                          errors.quantity1}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="length2">
                      <Form.Label>Length 2</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Length 2"
                        step={0.1}
                        value={values.length2}
                        onChange={handleChange}
                        isInvalid={errors.length2 && touched.length2}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.length2 && touched.length2 && errors.length2}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="quantity2">
                      <Form.Label>Quantity 2</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="Quantity 2"
                        value={values.quantity2}
                        onChange={handleChange}
                        isInvalid={errors.quantity2 && touched.quantity2}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.quantity2 &&
                          touched.quantity2 &&
                          errors.quantity2}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  {result && result != "" && (
                    <Collapse in={result && result != ""} dimension="width">
                      <Card.Text className="text-center color-primary">{`Minimum Needed Rebar = ${result}`}</Card.Text>
                    </Collapse>
                  )}
                  <Button variant="primary" type="submit">
                    Calculate
                  </Button>
                </Stack>
              </Form>
            </FormikProvider>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
