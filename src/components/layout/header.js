import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

 const Header = (props) => {
    const { branding } = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand" style={headingStyle}>
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link"><i className="fa fa-home"></i> Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/add/addContact" className="nav-link"><i className="fa fa-plus"></i> Add Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link"><i className="fa fa-question"></i> About</Link>
              </li>
            </ul>
          </div>
        </div>
        </nav>
  )
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

const headingStyle = {
    fontSize: '20px', 
    color: 'white'
}
export default Header;