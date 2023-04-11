import React, { useEffect, useState } from "react"
import { dataRef } from "./Firebase"
import firebase from "./Firebase"
import ChartViewer from './ChartViewer'
var val =0
function ValueGen(props){
    const [intensity,setName]=useState('')
    const [allValue,setAllValue]=useState([])


     const handleAdd=()=>{
        dataRef.ref().set({
            Monitoringdata : intensity,
          }).catch(alert);
          

        
    }

    
    
    // useEffect(()=>{
    //     dataRef.ref("/Monitoringdata").on('value',data=>{
    //         const getData=Object.values(data.val())
    //         lightintensity = getData;
    //     }) 
    // },[])
     
    const [data, updateData] = useState([1, 2, 3, 4, 5, 6]);

  


    useEffect(() => {
           
            let ref = dataRef.ref("/Monitoringdata");
            ref.on("value", snapshot => {
            val = snapshot.val()
            //console.log(val)
            setAllValue(val)
            
            
            })
      }, []);
      //lightintensity = allValue;

      
    //   setInterval(() => {
    //     console.log(allValue);
    //     props.getData(allValue)
    //   }, 1000000);

    useEffect(() => {
        const interval = setInterval(() => {
          
          let array = [...data, val];
          array.shift();
          updateData(array);
        }, 2000);
        return () => {
          window.clearInterval(interval);
        };
      }, [data]);
        

return(
    <>
     {/* <input value={intensity} onChange={(e)=>{setName(e.target.value)}} />
     <button onClick={handleAdd}>Add</button> */}
     <div style={{zIndex:"0"}}>
                {/* {allValue.map((valData,i)=><h1 key={i}>{valData}</h1>)} */}
                {/* from operation:{allValue} */}
            <ChartViewer  data={data} title="Product Trends by Month" />  

    </div>
    </>
);    
}


export default ValueGen;
