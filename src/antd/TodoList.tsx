import React from "react";
import Todo from "./Todo";
import { List } from "antd";
import { ITodo } from "../ITodo";



const TodoList: React.FC<{
  todos: ITodo[];
  onItemClick: (todoId: string) => void;
}> = ({ todos, onItemClick }) => {
  return (
    <List 
    locale={{
      emptyText: "  "
    }}
    dataSource={todos}
    renderItem={(todo: ITodo) => <Todo key={todo.id} {...todo} onClick={() => onItemClick(todo.id)} />} />
  );
};

export default TodoList;
