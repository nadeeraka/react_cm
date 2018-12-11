import React, { Component } from "react";

class Contact extends Component {
  state = {
    isClick: false
  };
  onModal = () => {
    this.setState(p => ({ isClick: !p.isClick }));
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
            {this.state.isClick && (
              <>
                <li className="list-group-item"> email- {email}</li>
                <li className="list-group-item">phone - {phone} </li>
              </>
            )}
          </ul>
        )}
        <div />
      </div>
    );
  }
}

export default Contact;
//  <BigModal
//             flip={this.onModal}
//             isClick={this.state.isClick}
//             data={this.state.data}
//           />
