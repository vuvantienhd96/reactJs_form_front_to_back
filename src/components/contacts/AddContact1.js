import React, { Component } from "react";
import { Consumer } from "./../context";
import uuid from "uuid";
import TextInputGroup from "./../layout/TextInputGroup";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      errors: {}
    };
  }

  onSubmit = (dispath, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === '') {
      this.setState({
        errors: { name: "Name is require" }
      });
      return;
    }
    if (email === '') {
      this.setState({
        errors: { email: "Email is require" }
      });
      return;
    }
    if (phone === '') {
      this.setState({
        errors: { phone: "Phone is require" }
      });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispath({ type: "Add_contact", payload: newContact });
    // clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispath } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispath)}>
                  <TextInputGroup
                    name="name"
                    label="Name"
                    type="text"
                    placehorder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    name="email"
                    label="Email"
                    type="text"
                    placehorder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    name="phone"
                    label="Phone"
                    type="text"
                    placehorder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <div className="form-group">
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
