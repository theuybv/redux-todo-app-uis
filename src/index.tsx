import React from "react";
import ReactDOM from "react-dom";
import MaterialUIApp from "./material-ui/App";
import ReactBootstrapApp from "./react-bootstrap/App";
import * as serviceWorker from "./serviceWorker";
import AntdApp from "./antd/App";
//@ts-ignore
import { TodosProvider } from "@theuybv/use-todos";

ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <MaterialUIApp />
    </TodosProvider>
  </React.StrictMode>,
  document.getElementById("material-ui")
);

ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <AntdApp />
    </TodosProvider>
  </React.StrictMode>,
  document.getElementById("antd")
);

ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <ReactBootstrapApp />
    </TodosProvider>
  </React.StrictMode>,
  document.getElementById("react-bootstrap")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
