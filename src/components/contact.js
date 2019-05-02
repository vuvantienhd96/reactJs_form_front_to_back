import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor(){
    super();
    this.state = {
      isCompleteShow: false
    };this.onShowClick = this.onShowClick.bind(this);
  }

  onShowClick = (e) => {
    this.setState({
      isCompleteShow: !this.state.isCompleteShow
    });
    
  }

  onDeleteClick = () =>{
    this.props.deleteClickHandle();
  }

  render() {
    const { name, email, phone } = this.props.contact;
    const { isCompleteShow } = this.state;
    return (
      <div className="card card-body mb-3">
        <h3>
          {name}{" "}
          <i
            className="fas fa-sort-down"
            onClick={this.onShowClick}
          />
          <i 
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red'}}
            onClick={this.onDeleteClick}></i>
        </h3>
        { isCompleteShow ? (<ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>): null}
        
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandle: PropTypes.func.isRequired
};
export default Contact;
