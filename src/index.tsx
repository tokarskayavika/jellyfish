import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import { NewGame } from "./components";
import { store } from "./store";

const Game = () => (
  <Provider store={store}>
    <NewGame />
  </Provider>
);

reactDom.render(<Game />, document.getElementById("root"));
