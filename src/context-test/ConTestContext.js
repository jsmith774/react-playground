import React from "react";

const ConTestContext = React.createContext({
  someKey: "initialState",
  anotherKey: "defaultValue",
});

export default ConTestContext;
