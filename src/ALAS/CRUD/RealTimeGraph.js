import React, { Component } from "react";
import Chart from "react-apexcharts";
import { dataRef } from "./Firebase"
import Operations from "./Operation";
var ih=0
class Ape extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [800,900,ih]
          
        }
      ],
    val:0
      
    };
  }


  

  getDat=(data)=> {
    ih = data
    this.setState({val: ih,series: [
      {
        name: "series-1",
        data: [800,900,ih]
        
      }
    ]}) 
} 
  


  render() {
    return (
      <div className="app">  
        <div className="row">
          <div className="mixed-chart">
            <Operations getData={this.getDat}/>
            {this.state.val}
          
    <Chart
        options={this.state.options}
        series={this.state.series}
        type="area"
        width="500"
    />
          </div>
        </div>
      </div>
    );
  }
}

export default Ape;