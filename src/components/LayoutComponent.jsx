import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent";

const style = {
  bg: `container items-center bg-black text-white grid md:w-1/2 h-screen grid-cols-4 gap-4`,
  lines: `grid grid-cols-4 gap-4`,
  screen: `p-3 bg-[#435769] col-span-4` 
};

class LayoutComponent extends React.Component {
  render() {
    return (
      <div className={style.bg}>
        <div className={style.screen}>
          <div className="col-span-4">
            <p>computations</p>
          </div>
          <div className="col-span-4">
            <p>Result</p>
          </div>
        </div>

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

        <button name="0" className="col-span-2">
          0
        </button>
        <ButtonComponent name="." />
        <ButtonComponent name="=" />
      </div>
    );
  }
}

export default LayoutComponent;
