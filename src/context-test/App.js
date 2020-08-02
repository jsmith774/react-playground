import React from "react";
import ConTestContext from "./ConTestContext";
import ChildLvl1 from "./ChildLvl1";

export default class App extends React.Component {
  render() {
    return (
      <ConTestContext.Provider value={{ someKey: "AppPassedValue" }}>
        <main>
          <ChildLvl1 />
        </main>
      </ConTestContext.Provider>
    );
  }
}
