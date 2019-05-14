import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      isCompleteShow: false
    };
    this.onShowClick = this.onShowClick.bind(this);
  }

  onShowClick = e => {
    this.setState({
      isCompleteShow: !this.state.isCompleteShow
    });
  };

  onDeleteClick = (dispath, id) => {
    dispath({type: 'Delete_producer', payload: id});
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { isCompleteShow } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispath } = value;
          return (
            <div className="card card-body mb-3">
              <h5>
                {name}{" "}
                <i className="fas fa-sort-down" onClick={this.onShowClick} />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this,dispath, id)}
                />
              </h5>
              {isCompleteShow ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
