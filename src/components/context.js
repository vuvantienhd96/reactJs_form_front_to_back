import React, { Component } from "react";

const Context = React.createContext();

const reduce = (state, acticon) => {
  switch (acticon.type) {
    case "Delete_producer":
      return {
        ...state,
        contacts: state.contacts.filter(state => state.id !== acticon.payload)
      };
    case "Add_contact":
      return {
        ...state,
        contacts: [
          acticon.payload,
          ...state.contacts
        ]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 0,
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
    ],
    dispath: (action => {
      this.setState(
        state => reduce(state, action)
      )
    })
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
