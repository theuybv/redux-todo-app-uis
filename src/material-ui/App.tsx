import React from "react";
import { ThemeProvider, useTheme,} from "@material-ui/core/styles";
import AddTodo from "./AddTodo";
//@ts-ignore
import useTodos from "@theuybv/use-todos";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { Typography } from "@material-ui/core";

function MaterialUIApp({ children }: any) {
  const theme = useTheme();
  const { selectors, actions } = useTodos();

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3">Material UI App</Typography>
      <br />
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

export default MaterialUIApp;
