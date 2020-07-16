import React from "react";
import Link from "./Link";
//@ts-ignore
import useTodos from "@theuybv/use-todos";

const Footer = () => {
  const { VISIBILITY_FILTERS } = useTodos();
  return (
    <div>
      <span>Show: </span>
      <Link filter={VISIBILITY_FILTERS.SHOW_ALL}>All</Link>
      <Link filter={VISIBILITY_FILTERS.SHOW_ACTIVE}>Active</Link>
      <Link filter={VISIBILITY_FILTERS.SHOW_COMPLETED}>Completed</Link>
    </div>
  );
};

export default Footer;
