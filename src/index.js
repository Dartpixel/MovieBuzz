import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";
import Sdata from "./Sdata";

function ncard(val) {
  return (
    <Card
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  )
}

ReactDOM.render(
  <>
    <h1>List of top 10 Netflix Series</h1>
    {Sdata.map(ncard)}
  </>,
  document.getElementById('root')
);



