import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";

import "./App.css";


export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = button => {
      //alert(Button.testIt());
      //button.image="";    
  //  this.setState(calculate(this.state, button));
    this.setState(button);
    //this.render();
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
                
      </div>
    );
  }
}
