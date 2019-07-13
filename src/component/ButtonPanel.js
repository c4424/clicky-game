/* Button Panel to contain all the images for the game.*/

import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import MetaData from "./meta-data";
import ClickyGame from "../logic/ClickyGame";
import "./ButtonPanel.css";

var game = new ClickyGame();
var state ={
      total: null,
      next: null,
      operation: null,
      style:null,
    };
function getImage(idx)
{
    return game.getStyle(idx);
}
export var styles=["image-test","image-test2"];
function getStyle(idx)
{
    //alert(styles[idx]);
    return game.getStyle(idx);
}

export default class ButtonPanel extends React.Component {

  static propTypes = {
    clickHandler: PropTypes.func,
  };
	//images=game.getImages();
	winCount=0;
	gameOver=false;
	

	handleClick = button => {
		alert(button.props.style);

		if(this.gameOver)
		{
			this.winCount=0;
			state.total=0;
			state.next=null;
			this.gameOver=false;
			game.startOver();
			//this.props.clickHandler(state);
			//return;
		}
	//alert(button.props.style);
		var t = (button.props.style+"").split("image-style")[1];
		//alert(button.props.style);
		
		if (game.gameOver(t))
		{
			alert("Game Over");
			state.total=0;
			state.next="Game Over";
			this.gameOver=true;
			this.props.clickHandler(state);
			return;
		}
		state.total="Win: "+(++this.winCount);
		game.shuffle();
		this.props.clickHandler(state);

	};

  render() {
    return (
      <div className="component-button-panel" id="divMainPanel">
        <div>
          <Button name={getImage(0)} id="1" style={getStyle(0)} clickHandler={this.handleClick} />
          <Button name={getImage(1)} id="2" style={getStyle(1)} clickHandler={this.handleClick} />
          <Button name={getImage(2)} id="3" style={getStyle(2)} clickHandler={this.handleClick} />
          <Button name={getImage(3)} id="4" style={getStyle(3)} clickHandler={this.handleClick} />            

        </div>
        <div>
          <Button name={getImage(4)}  id="5" style={getStyle(4)} clickHandler={this.handleClick} />
          <Button name={getImage(5)}  id="6" style={getStyle(5)} clickHandler={this.handleClick} />
          <Button name={getImage(6)}  id="7" style={getStyle(6)} clickHandler={this.handleClick} />
          <Button name={getImage(7)}  id="8" style={getStyle(7)} clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name={getImage(8)}  id="9" style={getStyle(8)} clickHandler={this.handleClick} />
          <Button name={getImage(9)} id="10" style={getStyle(9)} clickHandler={this.handleClick} />
          <Button name={getImage(10)} id="11" style={getStyle(10)} clickHandler={this.handleClick} />
          <Button name={getImage(11)} id="12" style={getStyle(11)} clickHandler={this.handleClick} />
        </div>

      </div>
    );
  }
}
