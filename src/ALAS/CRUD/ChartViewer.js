import React, { useEffect, useState } from "react"
import { dataRef } from "./Firebase"
import ValueGen from "./ValueGen";
import './Styleforchart.css'
import Chart from "react-apexcharts";
var ih =0
export default function ApexChart(props) {

//   useEffect(() => {
           
//     let ref = dataRef.ref("/Monitoringdata");
//     ref.on("value", snapshot => {
//     ih = snapshot.val()
//     // console.log(data)
    
    
//     })
// }, []);




  const series = [
    {
      name: "xx",
      data: props.data
    }
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
      curve: "smooth"
    },
    colors: ["#210124"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: true,
        gradientToColors: ["#DB162F"],
        opacityFrom: 1,
        opacityTo: 1,
        type: "vertical",
        stops: [0, 30]
      }
    }
  };
  
  
  


  return (
    <div id="chart" style={{width:"40%",left:"59%",top:"39px",position:"relative",backgroundColor:"#EBECF0",borderRadius:"12px"}}>
    <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}
