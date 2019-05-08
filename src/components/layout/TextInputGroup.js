import React from "react";
import PropTypes from "prop-types";

/* 
    {
  label,
  type,
  name,
  placehorder,
  value,
  onChange
}
*/

const TextInputGroup = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        className="form-control form-control-lg"
        placeholder={props.placehorder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placehorder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
TextInputGroup.defaultProps = {
  type: "text"
};
export default TextInputGroup;
