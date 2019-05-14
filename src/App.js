import React, { Component } from "react";
import Header from "./components/layout/header";
import AddContact from "./components/contacts/AddContact1";
import Contacts from "./components/contacts/Contacts";
import About from "./components/pages/About";

import { Provider } from "./components/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route path="/add/addContact" component={AddContact}/>
                <Route exact path="/" component={Contacts}/>
                <Route path="/about" component={About}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
