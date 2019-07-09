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
    return game.getImage(idx);
}
export var styles=["image-test","image-test2"];
function getStyle(idx)
{
    //alert(styles[idx]);
    return styles[idx];
}

export default class ButtonPanel extends React.Component {

  static propTypes = {
    clickHandler: PropTypes.func,
  };
  images=game.getImages();
  handleClick = button => {

	if (game.gameOver(button.props.id))
	{
		alert("Game Over");
		return;
	}
    this.shuffle();
    this.props.clickHandler(state);

  };
  shuffle = test =>
  {
	  //alert("Shuffle");
	game.shuffle();
  }
  render() {
    return (
      <div className="component-button-panel" id="divMainPanel">
        <div>
          <Button name={getImage(0)} id="1" style={getStyle(0)} clickHandler={this.handleClick} />
          <Button name={getImage(1)} id="2" style={getStyle(1)} clickHandler={this.handleClick} />
          <Button name={getImage(2)} id="3" style={getStyle(2)} clickHandler={this.handleClick} />
          <Button name={getImage(4)} id="4" clickHandler={this.handleClick} />            

        </div>
        <div>
          <Button name={getImage(5)}  id="5" clickHandler={this.handleClick} />
          <Button name={getImage(6)}  id="6" clickHandler={this.handleClick} />
          <Button name={getImage(7)}  id="7" clickHandler={this.handleClick} />
          <Button name={getImage(8)}  id="8" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name={getImage(9)}  id="9" clickHandler={this.handleClick} />
          <Button name={getImage(10)} id="10" clickHandler={this.handleClick} />
          <Button name={getImage(11)} id="11" clickHandler={this.handleClick} />
          <Button name={getImage(12)} id="12" clickHandler={this.handleClick} />
        </div>

      </div>
    );
  }
}
