import React, { Component } from "react";
import Header from "./components/layout/header";
import AddContact from "./components/contacts/AddContact1";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./components/context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
