import React from 'react';
import ConTestContext from './ConTestContext';
import ChildLvl1 from './ChildLvl1';

export default class AppConTest extends React.Component {
  render () {
    return (
      <ConTestContext.Provider>
      <header>
        <h1>Context Test App</h1>
      </header>
      <main>
        <ChildLvl1 />
      </main>
      <footer>
        Blah blah blah
      </footer>
      </ConTestContext.Provider>
    )
  }
}