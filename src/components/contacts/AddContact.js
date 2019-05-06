import React, { Component } from "react";
import { Consumer } from "./../context";
import uuid from "uuid";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
  }

  onSubmit = (dispath, e) => {
    e.preventDefault();

    const contacts = {
      id: uuid(),
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    
    dispath({type: 'Add_contact', payload: contacts})
  };

  static defaultProps = {
    name: "Fred Smith",
    email: "fred@yahoo.com",
    phone: "777-333-111"
  };

  render() {
    const { name, email, phone } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispath } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispath)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      defaultValue={name}
                      ref={this.nameInput}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      defaultValue={email}
                      ref={this.emailInput}
                    />
                    <label htmlFor="phone">phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone..."
                      defaultValue={phone}
                      ref={this.phoneInput}
                    />
                    <input
                      type="submit"
                      value="Add contact"
                      className="btn btn-light btn-block"
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
