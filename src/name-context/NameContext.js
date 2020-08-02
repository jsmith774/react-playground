import React from "react";

const lName = "Smith";

const NameContext = React.createContext({
  firstName: "James",
  middleInt: "R",
  lastName: lName, //demo variable usage
});

export default NameContext;
