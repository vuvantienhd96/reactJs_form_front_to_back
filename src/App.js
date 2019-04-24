import React, { Component } from 'react';
import Contacts  from './components/contacts';
import Header from './components/header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {

  render() {
    return  (
      <div className="App">
        <Header branding="Contact Manager"/>
        <Contacts/>
      </div>
    );
  }
}

export default App;