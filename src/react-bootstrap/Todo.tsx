import React from "react";
import { ListGroup } from "react-bootstrap";

const Todo: React.FC<{
  onClick: () => void;
  completed: boolean;
  text: string;
}> = ({ onClick, completed, text }) => (
  <ListGroup.Item as="li"
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </ListGroup.Item>
);

export default Todo;
