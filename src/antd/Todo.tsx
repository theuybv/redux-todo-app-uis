import React from "react";
import { List, Typography, Divider } from 'antd';


const Todo: React.FC<{
  onClick: () => void;
  completed: boolean;
  text: string;
}> = ({ onClick, completed, text }) => (
  <List.Item
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
      <Typography.Text>{text}</Typography.Text> 
  </List.Item>
);

export default Todo;
