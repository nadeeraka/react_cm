import React, { Component } from "react";
import Contact from "./contact";

class Contacts extends Component {
  //const {} = this.props.data;
  render() {
    return (
      <div className="card card-body mb-3">
        {this.props.data.map(r => (
          <li key={r.name}>
            {" "}
            <Contact key={r.name} textValue={r} />
          </li>
        ))}
      </div>
    );
  }
}
export default Contacts;
