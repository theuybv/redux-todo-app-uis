import React from "react";
import Todo from "./Todo";
import { ListGroup } from "react-bootstrap";
import { ITodo } from "../ITodo";



const TodoList: React.FC<{
  todos: ITodo[];
  onItemClick: (todoId: string) => void;
}> = ({ todos, onItemClick }) => {
  return (
    <ListGroup as="ul">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => onItemClick(todo.id)} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
