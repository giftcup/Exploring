import React, { Component } from "react";
import KeypadComponent from "./KeypadComponent";

const body = {
  bg: `container items-center bg-black text-white md:w-1/2 h-screen grid`,
  lines: `grid grid-cols-4 gap-2`,
  screen: `py-5 px-3 bg-[#435769] col-span-4 text-right rounded`,
};

class LayoutComponent extends Component {
  constructor(){
    super();

    this.state = {
        result: ""
    }
}


calculate = () => {
    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
        result: ""
    })
};

backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};

render() {
    return (
        <div>
            <div className="calculator-body">
                <h1>Simple Calculator</h1>
                <ResultComponent result={this.state.result}/>
                <KeypadComponent onClick={this.onClick}/>
            </div>
        </div>
    );
}
}


export default LayoutComponent;
