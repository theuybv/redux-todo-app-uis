import "./index.css";
import React from "react";
import { ThemeProvider } from "react-bootstrap";
import AddTodo from "./AddTodo";
//@ts-ignore
import useTodos from "@theuybv/use-todos";
import TodoList from "./TodoList";
import Footer from "./Footer";

function ReactBootStrapApp({ children }: any) {
  const { selectors, actions } = useTodos();
  return (
    <ThemeProvider prefixes={{}}>
      <h3>React Bootstrap App</h3>
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
    </ThemeProvider>
  );
}

export default ReactBootStrapApp;
