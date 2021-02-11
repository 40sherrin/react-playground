import React from "react";
import ReactDOM from "react-dom";

function Greeting(){
  return (
      <div>
        <Person />
        <h1>Hard work will pay</h1>
        <p>displine would be the key</p>
      </div>
  )
};

const Person = () => <h1>This is Fareed Askari</h1>;

ReactDOM.render(<Greeting />, document.getElementById("root"));