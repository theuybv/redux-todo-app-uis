import React, { ReactNode } from "react";
//@ts-ignore
import useTodos from "@theuybv/use-todos";
import { Button } from "react-bootstrap";

const Link: React.FC<{
  children: ReactNode,
  filter: string
}> = ({ children, filter }) => {

  const { selectors, actions } = useTodos();

  return (
    <Button
      variant="light"
      onClick={actions.setVisibility(filter)}
      disabled={selectors.active(filter)}
      style={{
        marginLeft: "4px",
      }}
    >
      {children}
    </Button>
  );
};



export default Link;
