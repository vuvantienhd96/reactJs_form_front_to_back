import React, { Component } from "react";
import Contact from "./contact";
import { Consumer } from "./context";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {};
  }

  deleteContact = id => {
    const { contacts } = this.state;
    const newContact = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContact
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandle={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
