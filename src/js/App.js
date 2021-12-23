import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";

export default function App() {
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
            <Form className="mt-3">
              <Stack gap={2} className="mt-3">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="length1">
                    <Form.Label>Length 1</Form.Label>
                    <Form.Control type="number" placeholder="Length 1" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="quantity1">
                    <Form.Label>Quantity 1</Form.Label>
                    <Form.Control type="number" placeholder="Quantity 1" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="length2">
                    <Form.Label>Length 2</Form.Label>
                    <Form.Control type="number" placeholder="Length 2" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="quantity2">
                    <Form.Label>Quantity 2</Form.Label>
                    <Form.Control type="number" placeholder="Quantity 2" />
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
