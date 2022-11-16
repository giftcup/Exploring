import React, { Component } from "react";
import ButtonComponent from './ButtonComponent'


const style = {
    button: `grid grid-cols-4 gap-4 p-4`
}

class KeypadComponent extends Component {
  render() {
    return (
      <div className={style.button}>
        <ButtonComponent name="C" />
        <ButtonComponent name="(" />
        <ButtonComponent name=")" />
        <ButtonComponent name="/" />

        <ButtonComponent name="7" />
        <ButtonComponent name="8" />
        <ButtonComponent name="9" />
        <ButtonComponent name="x" />

        <ButtonComponent name="4" />
        <ButtonComponent name="5" />
        <ButtonComponent name="6" />
        <ButtonComponent name="-" />

        <ButtonComponent name="1" />
        <ButtonComponent name="2" />
        <ButtonComponent name="3" />
        <ButtonComponent name="+" />

        {/* <button
          name="0"
          className="col-span-2 bg-[#430090] p-3 rounded rounded-lg text-lg"
        >
          0
        </button> */}
        <ButtonComponent name="0" className="cols-span-2" />
        <ButtonComponent name="." />
        <ButtonComponent name="=" />
      </div>
    );
  }
}


export default KeypadComponent;