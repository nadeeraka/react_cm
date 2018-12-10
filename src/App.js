import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
//import Contact from "./components/contact";
import Header from "./components/header";
import data from "./components/api";
import Contacts from "./components/contacts";
class App extends Component {
  state = {
    header: "Contact Manager",
    data: []
  };
  componentDidMount() {
    let api = data;
    this.setState(() => ({ data: api }));
  }

  render() {
    return (
      <div>
        <Header cm={this.state.header} />
        <div className="container">
          <Contacts data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
