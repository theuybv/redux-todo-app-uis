import React from "react";
import { TextField, Button } from "@material-ui/core";

const AddTodo: React.FC<{ onSubmit: (value: string) => void }> = ({ onSubmit }) => {
  let input: any;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          onSubmit(input.value);
          input.value = "";
        }}
      >
        <TextField style={{marginRight: 30}} inputRef={(node) => (input = node)}  /> 
        <Button variant={"contained"} color="primary" type="submit">Add Todo</Button>
      </form>
    </div>
  );
};

export default AddTodo;
