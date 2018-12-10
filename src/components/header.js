import React from "react";
//impt
import PropTypes from "prop-types";

//const branding = "Contact Manager";
function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {props.cm}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <i className="fas fa-home" /> Home
              </li>
              <li className="nav-item">
                <i className="fas fa-plus" /> Add
              </li>
              <li className="nav-item">
                <i className="fas fa-question" /> About
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
Header.defaultProps = {
  cm: "CM"
};
Header.prototype = {
  cm: PropTypes.bool.isRequired
};
// const hedingStyle = {
//   color: "read",
//   fontSize: "50px"
// };
export default Header;
