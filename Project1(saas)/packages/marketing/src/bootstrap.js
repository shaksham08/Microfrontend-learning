// Here we would write our main project
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
// Mount fn to start the app
const mount = (el) => {
  ReactDom.render(<App />, el);
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
