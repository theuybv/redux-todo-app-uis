import React from "react";
import Todo from "./Todo";
import { List } from "@material-ui/core";
import { ITodo } from "../ITodo";



const TodoList: React.FC<{
  todos: ITodo[];
  onItemClick: (todoId: string) => void;
}> = ({ todos, onItemClick }) => {
  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => onItemClick(todo.id)} />
      ))}
    </List>
  );
};

export default TodoList;
