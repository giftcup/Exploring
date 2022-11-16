import React, { Component, useState } from "react";
import LayoutComponent from "./LayoutComponent";

const styles = {
  button: `bg-[#430090] p-3 rounded rounded-lg text-lg`,
};

class ButtonComponent extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  clicked = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else {
      console.log(button)
      this.setState({
        result: this.state.result + button,
      });
      console.log(this.state.result)
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + "",
      });
      console.log(this.state.result)
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  render() {
    return (
      <button
        className={styles.button}
        name={this.props.name}
        onClick={(e) => this.clicked(e.target.name)}
        // onClick={() => {
        //   console.log(`${this.props.name} clicked!`);
        // }}
      >
        {this.props.name}
      </button>
    );
  }
}

export default ButtonComponent;
