import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";

export default function App() {
  const [validated, setValidated] = useState(false);

  const length1 = React.createRef();
  const quantity1 = React.createRef();
  const length2 = React.createRef();
  const quantity2 = React.createRef();

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
    }

    setValidated(true);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Justice Tech</Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid="sm">
        <Card
          className="col-md-10 col-lg-8 col-xl-7 mx-auto mt-3"
          border="primary"
        >
          <Card.Body>
            <Card.Title className="text-center">
              Minimum Rebar Needed Calculator
            </Card.Title>
            <Form
              className="mt-3"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Stack gap={2} className="mt-3">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="length1">
                    <Form.Label>Length 1</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Length 1"
                      ref={length1}
                    />
                    <Form.Control.Feedback type="invalid">
                      Length 1 is required!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="quantity1">
                    <Form.Label>Quantity 1</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Quantity 1"
                      ref={quantity1}
                    />
                    <Form.Control.Feedback type="invalid">
                      Quantity 1 is required!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="length2">
                    <Form.Label>Length 2</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Length 2"
                      ref={length2}
                    />
                    <Form.Control.Feedback type="invalid">
                      Length 2 is required!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="quantity2">
                    <Form.Label>Quantity 2</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Quantity 2"
                      ref={quantity2}
                    />
                    <Form.Control.Feedback type="invalid">
                      Quantity 2 is required!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                  Calculate
                </Button>
              </Stack>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
