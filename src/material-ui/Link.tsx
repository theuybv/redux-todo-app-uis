import React, { ReactNode } from "react";
//@ts-ignore
import useTodos from "@theuybv/use-todos";
import { Button } from "@material-ui/core";

const Link: React.FC<{
  children: ReactNode,
  filter: string
}> = ({ children, filter }) => {

  const { selectors, actions } = useTodos();

  return (
    <Button
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
