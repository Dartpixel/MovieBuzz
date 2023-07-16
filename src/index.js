import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";

ReactDOM.render(
  <>
    <h1>List of top 10 Netflix Series</h1>
    <Card
      imgsrc="sample1.jpg"
      title="Netflix Original Series"
      height='500px' width='850px'
      sname="Peaky Blinders"
      link="https://www.netflix.com/in/title/80002479"

    />
    <Card
      imgsrc="sample2.jpg"
      title="Netflix Original Series"
      height='500px' width='850px'
      sname="Stranger Things"
      link="https://www.netflix.com/in/title/80057281"
    />

    <Card
      imgsrc="sample3.jpg"
      title="Netflix Original Series"
      height='500px' width='850px'
      sname="Breaking Bad"
      link="https://www.netflix.com/in/title/70143836"
    />

    <Card
      imgsrc="sample4.jpg"
      title="Netflix Original Series"
      height='500px' width='850px'
      sname="Money Heist"
      link="https://www.https://www.netflix.com/in/title/80192098"
    />

    <Card
      imgsrc="sample5.jpg"
      title="Netflix Original Series"
      height='500px' width='850px'
      sname="All Of Us Are Dead"
      link="https://www.netflix.com/in/title/81237994"
    />

    <Card
      imgsrc="sample6.jpg"
      title="Netflix Original Series"
      height='500px' width='850px'
      sname="Daredevil"
      link="https://www.netflix.com/in/title/80018294"
    />

    <Card
      imgsrc="sample7.jpg"
      title="Netflix Original Series"
      height='500px' width='850px'
      sname="Dark"
      link="https://www.netflix.com/in/title/80100172"
    />

    <Card
      imgsrc="sample8.jpg"
      title="Netflix Original Series"
      height='500px' width='850px'
      sname="Narcos"
      link="https://www.netflix.com/in/title/80025172"
    />

    <Card
      imgsrc="sample9.jpg"
      title="Netflix Original Series"
      height='500px' width='850px'
      sname="Maid"
      link="https://www.netflix.com/in/title/81166770"
    />

    <Card
      imgsrc="sample10.jpg"
      title="Netflix Original Series"
      height='500px' width='850px'
      sname="Ozark"
      link="https://www.netflix.com/in/title/80117552"
    />

  </>,
  document.getElementById('root')
);



