import React from 'react';
import ChildLvl2 from './ChildLvl2';
import ConTestContext from './ConTestContext';

export default class ChildLvl1 extends React.Component {
  static contextType = ConTestContext;
  
  render () {
    return (
      <div>
        <div>This is ChildLvl1</div>
        <ChildLvl2/>
        <ChildLvl2/>
        <ChildLvl2/>
      </div>
    )
  }
}