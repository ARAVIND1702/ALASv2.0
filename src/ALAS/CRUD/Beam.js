import React, { Component } from "react";

import { dataRef } from "./Firebase"

var ih=0
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
  

  
  


  render() {
    return (
      <>
      <button value={parseInt(0)} onClick={this.Intesity}>OFF</button>
      <button value={parseInt(this.state.LowBeam)} onClick={this.Intesity}>LOW</button>
      <button value={this.state.HighBeam} onClick={this.Intesity}>HIGH</button>
      </>
    );
  }
}

export default Beam;