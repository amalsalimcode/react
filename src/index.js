import React from "react";
import { render } from "react-dom";
import style from './index.css';

function Welcome(props) {

  let children = [];
  for (let i = 0; i < 13; i++) {
    children.push(<h1>Hello</h1>)
  }
  console.log("hello amal");
  return <div>{children}</div>;
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

const Index = () => {
  return <div>
          <img className={style.cover} src='https://s3-us-west-2.amazonaws.com/allyo-bucket/images/academy.jpg' />
          <h1>Task Completion</h1>
          <h4>Overview</h4>
          <p> I am making a test webpage to learn html/css. I would like to make the image mold to the shape of the border. It should not be much of a problem but it seems as though the image in not centered in the border. As I change the image size etc it seems as though the image is more so in the middle of the page and leaves the border etc. I just want it to fit perfectly in the border, and for the photo to be clipped along the borders edges. I am having problems with this. </p>
          <img src='https://s3-us-west-2.amazonaws.com/allyo-bucket/images/one.jpeg' />
          {element}
        </div>;
};

render(
    <Index />,
    document.getElementById("index"));
console.log("hello");
