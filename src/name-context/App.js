import React from "react";
//import NameContext from "./NameContext";
import Name from "./Name";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>APP: name-context NameContext</h1>
        <br />
        <Name />
      </div>
    );
  }
}
