import React from "react";
import { Form, Button, Col } from "react-bootstrap";

const AddTodo: React.FC<{ onSubmit: (value: string) => void }> = ({
  onSubmit,
}) => {
  let input: HTMLInputElement;

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          onSubmit(input.value);
          input.value = "";
        }}
      >
        <Form.Row>
          <Col xs="auto">
            <Form.Control ref={(node: HTMLInputElement) => (input = node)} />
          </Col>
          <Col xs="auto">
          <Button variant={"primary"} type="submit" className="mb-2">
            Add Todo
          </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};

export default AddTodo;
