import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
var images=['AC','+/-','%','÷'];
export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    image: PropTypes.string,
    style: PropTypes.string,
    id: PropTypes.string,
    clickHandler: PropTypes.func,
    shuffle: PropTypes.func,        
  };

  handleClick = () => {
    //alert("handleClick: "+this.props.image);
    
    this.props.clickHandler(this);
  };
  testIt = () => {
      alert("buttonName");

  };
  getStyle()
{
    return "test-image";
}
  getImage(idx)
  {
    return images[idx];
  }
  shuffle()
  {
      alert("Shuffle images");
      images[0]="AB";
  }
  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button class={this.props.style} onClick={this.handleClick}></button>
      </div>
    );
  }
}
