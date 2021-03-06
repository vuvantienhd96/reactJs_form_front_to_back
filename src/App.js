import React, { Component } from "react";
import Contacts from "./components/contacts";
import Header from "./components/header";

import { Provider } from "./components/context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
