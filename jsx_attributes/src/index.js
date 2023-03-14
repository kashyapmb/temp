import React from 'react';
import ReactDOM from 'react-dom';


const url1 = "https://picsum.photos/250/300"
const url2 = "https://picsum.photos/300/300"
const url3 = "https://picsum.photos/320/300"
ReactDOM.render(
  <>
    <h1 contentEditable='true'>My name is</h1>
    <img src={url1} alt="Random Image"/>
    <img src={url2} alt="Random Image"/>
    <img src={url3} alt="Random Image"/>
  </>,
  document.getElementById('root')
);
