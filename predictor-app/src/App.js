import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Layout from "./containers/Layout/Layout";
import Routes from "./Routes";

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

const store = createStore(todos, ["Use Redux"]);

const App = () => {
  console.log("app");
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
