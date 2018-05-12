import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const Index = () => {
  return <div><h1>Hello React!</h1></div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
console.log("hello");
