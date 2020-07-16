import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

const Todo: React.FC<{
  onClick: () => void;
  completed: boolean;
  text: string;
}> = ({ onClick, completed, text }) => (
  <ListItem
    button
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    <ListItemText primary={text}></ListItemText>
  </ListItem>
);

export default Todo;
