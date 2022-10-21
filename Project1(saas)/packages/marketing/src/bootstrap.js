// Here we would write our main project
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";
// Mount fn to start the app
const mount = (el) => {
  const history = createMemoryHistory();
  ReactDom.render(<App history={history} />, el);
};

// if we are in dev and isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// if we are running through  container
// we should export the mount function
export { mount };
