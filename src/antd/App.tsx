import './index.css';
import React from "react";
import { Typography, Divider } from "antd";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";
//@ts-ignore
import useTodos from "@theuybv/use-todos";
const { Title, Paragraph, Text } = Typography;

function AntdApp() {
  const { selectors, actions } = useTodos();

  return (
    <div>
      <Title>Antd App</Title>
      <AddTodo
        onSubmit={(value) => {
          actions.addTodo(value);
        }}
      />
      <TodoList
        todos={selectors.todos}
        onItemClick={(id) => {
          actions.toggleTodo(id);
        }}
      />
      <Footer />
    </div>
  );
}

export default AntdApp;
