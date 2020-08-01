import React from 'react';
import ConTestContext from './ConTestContext';

export default class ChildLvl2 extends React.Component {
  static contextType = ConTestContext;

  render() {
   console.log(this.context);
   const valueFromCtx = "static val not from ctx"; 
   return (

      <div>This is component 2 {valueFromCtx}</div>
    )
  }
}

/*
<ConTestContext.Consumer>
        {function renderProp() {
          (value) => {
            console.log(value);
            return (
              <div>This is component 2 {value.someKey}</div>
            )
          }
        }}
      </ConTestContext.Consumer>
*/