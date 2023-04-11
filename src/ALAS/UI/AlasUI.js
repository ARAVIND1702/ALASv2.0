import React, { Component } from "react";
import './dash.css'
import { dataRef } from "./Firebase"

var ele

let ih=90
var val
class Beam extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      off:0,
      LowBeam:1,
      HighBeam:2
      
    };
  }
  
  Intesity=(e)=>{
    dataRef.ref('/mode').set({
       LightMode:parseInt(e.target.value),
      }).catch(alert);
      
  }

  
  
  

dataRetrieve(){
  let ref = dataRef.ref("/Monitoringdata");
            ref.on("value", snapshot => {
            val = snapshot.val()
            console.log(val)
            console.log((val * 100)/1024)
            val=(val * 100)/1024
            console.log(this.state.HighBeam)
            ;
})
}

changeMultipleCSS() {
  // Defining all our CSS styles]\
  //console.log(val);

  const myStyles = `
  width: ${val}%;
  height: 100%;
  position: absolute;
  border-radius: inherit;
  background-image: linear-gradient(to right, #1657F0, #36D7E0);
  content:40%;
  `;
  const element = document.querySelector(".progress__fill");

  element.style.cssText = myStyles;



}
graph_1() {
  // Defining all our CSS styles]\
  //console.log(val);

  const myStyles = `
  height: 90%;
 
  
  `;
  
   ele = document.querySelector(".graph__line--one");

  ele.style.cssText = myStyles;

  

}



// changeMultipleCSS(e) {
//   // Defining all our CSS styles
//   const myStyles = `
//     display: block;
//     width:${ih}px;
//     background-color: red;
//     border: 2px;
//     font-size: 5em;
//     color: white;
//     margin: 20px;
//     padding-left: 10px;
//     padding-bottom: 10px;
//     border: 2px solid black;
//   `;

// componentDidMount() {
//   this.timerID = setInterval(
//     () => this.dataRetrieve(),
//     1000
//   );
// }

componentWillMount(){
  this.timerID = setInterval(
    () => {
      return this.dataRetrieve();
    },
    1000
  );
}

componentDidMount() {
  this.timerID = setInterval(
    () => this.changeMultipleCSS(),
    1000
  );
}

componentWillUnmount() {
  clearInterval(this.timerID);
}






  render() {
    return (
      <>
      
{/* 
      <button value={parseInt(0)} onClick={this.Intesity}>OFF</button>
      <button value={parseInt(this.state.LowBeam)} onClick={this.Intesity}>LOW</button>
      <button value={this.state.HighBeam} onClick={this.Intesity}>HIGH</button> */}
     {/* DYNAMIC */}
     {/* <div class="demo" >Hello</div>
      <button class="add" onClick={this.dataRetrieve}>Change CSS style</button> */}

        
      
      {/* <!-- partial:index.partial.html --> */}
<div className="box" style={{zIndex:"1"}} >      
<div class="wrapper">
  <div class="grid">
    <button class="square-lg" onClick={this.props.loadweather}>
      <svg class="square-lg__gradient-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 64">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0319dd"></stop>
            <stop offset="20%" stop-color="#1657F0"></stop>
            <stop offset="78%" stop-color="#36D7E0"></stop>
          </linearGradient>
        </defs>
        <text fill="url(#grad1)" x="50%" y="60%" dominant-baseline="middle" text-anchor="middle">Alas</text>
      </svg>
    </button>
    <button class="oval-lg" value={0}  onClick={this.Intesity}>OFF</button>
    <div class="spaced-container">
      <button class="icon-btn">
        <svg class="icon-btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
          <polygon transform="translate(12.000000, 8.000000)" points="12.8 0 15.6 2.9 5.7 12.2 15.6 22 12.7 24.8 2.8 14.9 2.7 14.9 1.4 13.5 0 12.1 0 12.1 0 12 1.4 10.7 2.8 9.3 2.9 9.3"></polygon>
        </svg>
      </button>
      <button class="icon-btn">
        <svg class="icon-btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
          <polygon transform="translate(20.000000, 20.500000) rotate(-180.000000) translate(-20.000000, -20.500000) translate(12.000000, 8.000000)" points="12.8 0 15.6 2.9 5.7 12.2 15.6 22 12.7 24.8 2.8 14.9 2.7 14.9 1.4 13.5 0 12.1 0 12.1 0 12 1.4 10.7 2.8 9.3 2.9 9.3"></polygon>
        </svg>
      </button>
    </div>
    <div class="toggle">
      <input class="toggle__input" id="toggle-1" type="checkbox"/>
      <label class="toggle__switch" for="toggle-1"></label>
    </div>
    <button class="oval-lg" value={1}  onClick={this.Intesity}>LOW</button>
    {/* <input class="oval-lg" type="text" value="Input"/> */}
    <div class="spaced-container">
      <div class="radio">
        <input class="radio__input" id="radio-1" type="radio" name="group"/>
        <label class="radio__btn" for="radio-1"></label>
      </div>
      <div class="radio">
        <input class="radio__input" id="radio-2" type="radio" name="group" checked="checked"/>
        <label class="radio__btn" for="radio-2"></label>
      </div>
    </div>
    <div class="toggle">
      <input class="toggle__input" id="toggle-2" type="checkbox" checked="true"/>
      <label class="toggle__switch" for="toggle-2"></label>
    </div>
    <button class="oval-sm spaced-container"><span>Share</span>
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <path d="M30 2C33.9 2 37 5.1 37 9 37 12.9 33.9 16 30 16 28 16 26.3 15.2 25 13.9L16.9 18.6C17 19.1 17 19.5 17 20 17 20.4 17 20.8 16.9 21.2L25.1 26C26.4 24.7 28.1 24 30 24 33.9 24 37 27.1 37 31 37 34.9 33.9 38 30 38 26.1 38 23 34.9 23 31 23 30.5 23.1 30 23.2 29.5L15.1 24.8C13.8 26.2 12 27 10 27 6.1 27 3 23.9 3 20 3 16.1 6.1 13 10 13 12 13 13.7 13.8 15 15.1L23.1 10.4C23 9.9 23 9.5 23 9 23 5.1 26.1 2 30 2ZM30 28C28.3 28 27 29.3 27 31 27 32.7 28.3 34 30 34 31.7 34 33 32.7 33 31 33 29.3 31.7 28 30 28ZM10 17C8.3 17 7 18.3 7 20 7 21.7 8.3 23 10 23 11.7 23 13 21.7 13 20 13 18.3 11.7 17 10 17ZM30 6C28.3 6 27 7.3 27 9 27 10.7 28.3 12 30 12 31.7 12 33 10.7 33 9 33 7.3 31.7 6 30 6Z"></path>
      </svg>
    </button>
    <button class="oval-lg" value={2}  onClick={this.Intesity}>HIGH
      {/* <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <polygon transform="translate(20.000000, 20.500000) rotate(-90.000000) translate(-20.000000, -20.500000) translate(12.000000, 8.000000)" points="12.8 0 15.6 2.9 5.7 12.2 15.6 22 12.7 24.8 2.8 14.9 2.7 14.9 1.4 13.5 0 12.1 0 12.1 0 12 1.4 10.7 2.8 9.3 2.9 9.3"></polygon>
      </svg> */}
    </button>
    <div class="graph spaced-container">
      <div class="graph__line--one"></div>
      <div class="graph__line--two"></div>
      <div class="graph__line--three"></div>
      <div class="graph__line--four"></div>
      <div class="graph__line--five"></div>
    </div>
    <button class="oval-sm spaced-container">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <path d="M19.6 1C28.2 1 35.2 8 35.2 16.6 35.2 20.5 33.7 24.2 31.1 27.1L30.8 27.3 19.6 39 8.4 27.5C2.4 21.3 2.5 11.5 8.7 5.4 11.4 2.8 15 1.2 18.8 1L19.2 1 19.6 1ZM19.6 4.9L19.3 4.9C16.4 5 13.5 6.2 11.4 8.2 6.9 12.7 6.7 19.9 11 24.6L11.2 24.8 19.6 33.4 28 24.7C30 22.6 31.1 20 31.3 17.3L31.3 16.9 31.3 16.6C31.3 10.2 26.2 5 19.9 4.9L19.6 4.9ZM19.6 13.3C21.4 13.3 23 14.8 23 16.7 23 18.6 21.4 20.1 19.6 20.1 17.7 20.1 16.2 18.6 16.2 16.7 16.2 14.8 17.7 13.3 19.6 13.3Z"></path>
      </svg><span>Label</span>
    </button>
    <button class="oval-lg--with-icon" onClick={this.graph_1}>
      <i class="wi wi-night-sleet"></i>
      <span style={{paddingLeft:"18px"}}>Weather</span>
    </button>
    <div class="search">
      <svg class="search__icon icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <path d="M18 3C26.3 3 33.1 9.7 33.1 18 33.1 21.5 31.9 24.7 29.9 27.3L37 34.4 34.4 37 27.3 29.9C24.7 31.9 21.5 33.1 18 33.1 9.7 33.1 3 26.3 3 18 3 9.7 9.7 3 18 3ZM18.1 6.9C11.9 6.9 6.9 11.9 6.9 18.1 6.9 24.2 11.9 29.2 18.1 29.2 24.2 29.2 29.2 24.2 29.2 18.1 29.2 11.9 24.2 6.9 18.1 6.9Z"></path>
      </svg>
      <input class="search__input oval-xlg" type="text" placeholder="Search for..."/>
    </div>
    <div class="progress">
      <div class="progress__fill"></div>
    </div>
  </div>
</div>
</div>
{/* <!-- partial --> */}


      </>
    );
  }
}

export default Beam;