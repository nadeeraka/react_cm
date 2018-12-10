import React, { Component } from "react";
import BigModal from "./bigModal";
class Contact extends Component {
  state = {
    isClick: false,
    data: {
      name: "",
      email: "",
      phone: ""
    }
  };
  onModal = (e, m, p) => {
    this.setState(p => ({ isClick: !p.isClick }));
    console.log(e, m, p);
    this.setState(() => ({ data: { name: e, email: m, phone: p } }));
  };
  render() {
    const { name, email, phone } = this.props.textValue;
    return (
      <div className="card card-body mb-3">
        {this.props.textValue && (
          <ul className="list-group">
            <h3>
              <i
                onClick={this.onModal.bind(this, name, email, phone)}
                className="fas fa-sort-down"
              >
                {name}
              </i>
            </h3>
            <li className="list-group-item"> email- {email}</li>
            <li className="list-group-item">phone - {phone} </li>
          </ul>
        )}
        <div />
        <>
          <BigModal
            flip={this.onModal}
            isClick={this.state.isClick}
            data={this.state.data}
          />
        </>
      </div>
    );
  }
}

export default Contact;
