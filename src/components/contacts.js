import React, { Component } from "react";
import Contact from "./contact";
import uuid from "uuid";
class Contacts extends Component {
  //const {} = this.props.data;
  render() {
    return (
      <div className="card card-body mb-3">
        {this.props.data.map(r => (
          <p key={r.name}>
            {" "}
            <Contact key={uuid()} textValue={r} />
          </p>
        ))}
      </div>
    );
  }
}
export default Contacts;
