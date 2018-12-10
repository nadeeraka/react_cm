import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props.textValue;
    return (
      <div className="card card-body mb-3">
        {this.props.textValue && (
          <ul className="list-group">
            <h3>
              <i className="fas fa-sort-down">{name}</i>
            </h3>
            <li className="list-group-item"> email- {email}</li>
            <li className="list-group-item">phone - {phone} </li>
          </ul>
        )}
      </div>
    );
  }
}
export default Contact;
