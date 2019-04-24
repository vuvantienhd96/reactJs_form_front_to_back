import React, { Component } from "react";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Jone dieanel",
          phone: "554-232-333",
          email: "jodd@gmail.com"
        },
        {
          id: 1,
          name: "Joe ladie",
          email: "joe@gmail.com",
          phone: "555-333-333"
        },
        {
          id: 2,
          name: "naruto",
          email: "naruto@gmail.com",
          phone: "225-333-333"
        },
        {
          id: 3,
          name: "mark loe",
          email: "loemark@gmail.com",
          phone: "555-332-131"
        },
        {
          id: 4,
          name: "Joker adie",
          email: "joker@gmail.com",
          phone: "111-333-333"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
        <div>
            {contacts.map(contacts => (
                <h1>{contacts.name}</h1>
            ))}
        </div>
    );
  }
}

export default Contacts;
