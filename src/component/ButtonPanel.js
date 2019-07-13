/* Button Panel to contain all the images for the game.*/

import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import MetaData from "./meta-data";
import ClickyGame from "../logic/ClickyGame";
import "./ButtonPanel.css";


	

export var styles=["image-test","image-test2"];


export default class ButtonPanel extends React.Component {

  static propTypes = {
    clickHandler: PropTypes.func,
  };
  // state of the game including total and current style.

	state ={
      total: null,
      next: null,
      style:null,
    };
	
	game = new ClickyGame(); // instantiate GlickyGame object.
	
	winCount=0;
	gameOver=false; // flag to determine if game is over.
	getStyle(idx) // get an image from style array.
	{
		//alert(styles[idx]);
		return this.game.getStyle(idx);
	}

	handleClick = button => {
		//alert(button.props.style);

		if(this.gameOver)
		{
			this.winCount=0;
			this.state.total=0;
			this.state.next=null;
			this.gameOver=false;
			this.game.startOver();
			//this.props.clickHandler(state);
			//return;
		}
	//alert(button.props.style);
		var t = (button.props.style+"").split("image-style")[1];
		//alert(button.props.style);
		
		if (this.game.gameOver(t))
		{
			alert("Game Over");
			this.state.total=0;
			this.state.next="this.game Over";
			this.gameOver=true;
			this.props.clickHandler(this.state);
			return;
		}
		this.state.total="Win: "+(++this.winCount);
		this.game.shuffle();
		this.props.clickHandler(this.state);

	};

  render() {
    return (
      <div className="component-button-panel" id="divMainPanel">
        <div>
          <Button name={this.getStyle(0)} id="1" style={this.getStyle(0)} clickHandler={this.handleClick} />
          <Button name={this.getStyle(1)} id="2" style={this.getStyle(1)} clickHandler={this.handleClick} />
          <Button name={this.getStyle(2)} id="3" style={this.getStyle(2)} clickHandler={this.handleClick} />
          <Button name={this.getStyle(3)} id="4" style={this.getStyle(3)} clickHandler={this.handleClick} />            

        </div>
        <div>
          <Button name={this.getStyle(4)}  id="5" style={this.getStyle(4)} clickHandler={this.handleClick} />
          <Button name={this.getStyle(5)}  id="6" style={this.getStyle(5)} clickHandler={this.handleClick} />
          <Button name={this.getStyle(6)}  id="7" style={this.getStyle(6)} clickHandler={this.handleClick} />
          <Button name={this.getStyle(7)}  id="8" style={this.getStyle(7)} clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name={this.getStyle(8)}  id="9" style={this.getStyle(8)} clickHandler={this.handleClick} />
          <Button name={this.getStyle(9)} id="10" style={this.getStyle(9)} clickHandler={this.handleClick} />
          <Button name={this.getStyle(10)} id="11" style={this.getStyle(10)} clickHandler={this.handleClick} />
          <Button name={this.getStyle(11)} id="12" style={this.getStyle(11)} clickHandler={this.handleClick} />
        </div>

      </div>
    );
  }
}
