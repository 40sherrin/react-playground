import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Greeting(){
  return (
      <section>
        <Books />
      </section>
  )
};

function BooksCover(){
  return <img src="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg" alt="" />
}

const Title = () => <h1>Rich Dad Poor Dad</h1>;
const Author = () => <h3>Robert T. Kiyosaki</h3>;


function Books() {
  return (
    <div>
      <BooksCover />
      <Title />
      <Author />
    </div>
  )
}


ReactDOM.render(<Greeting />, document.getElementById("root"));