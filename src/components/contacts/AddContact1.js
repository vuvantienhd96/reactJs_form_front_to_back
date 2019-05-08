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
      phone: ""
    };
  }
 

  onSubmit = (dispath, e) => {
    e.preventDefault();
    console.log(this.state);
    const  { name, email, phone} = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }
    dispath({type: 'Add_contact', payload: newContact})
    // clear State
    this.setState({
      name: '',
      email: '',
      phone: ''
    })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispath } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispath)}>
                  {/* <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      value={name}
                      onChange={this.onChange}
                    />
                  </div> */}
                  <TextInputGroup 
                    name="name"
                    label="Name"
                    type="text"
                    placehorder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                  ></TextInputGroup>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Email</label>
                    <input
                      type="number"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone..."
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div>
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
