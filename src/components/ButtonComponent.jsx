import React, {Component} from "react";

class ButtonComponent extends React.Component {
    render() {
        return (
            <button name={this.props.name}>{this.props.name}</button>
        );
    }
}

export default ButtonComponent;