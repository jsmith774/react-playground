import React from "react";
import NameContext from "./NameContext";

export default class Name extends React.Component {
  static contextType = NameContext;

  render() {
    const { firstName, middleInt, lastName } = this.context;

    return (
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
      </div>
    );
  }
}
