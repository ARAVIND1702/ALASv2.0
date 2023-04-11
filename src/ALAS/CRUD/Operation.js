import React, { useEffect, useState } from "react"
import { dataRef } from "./Firebase"
import firebase from "./Firebase"
var data ;
function Operations(props){
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
     
    


    useEffect(() => {
           
            let ref = dataRef.ref("/Monitoringdata");
            ref.on("value", snapshot => {
            data = snapshot.val()
            // console.log(data)
            setAllValue(data)
            
            
            })
      }, []);
      //lightintensity = allValue;

      
    //   setInterval(() => {
    //     console.log(allValue);
    //     props.getData(allValue)
    //   }, 1000000);

    setTimeout(() => {
        props.getData(allValue)
      }, 3000);

return(
    <div>
     <input value={intensity} onChange={(e)=>{setName(e.target.value)}} />
     <button onClick={handleAdd}>Add</button>
     <div>
                {/* {allValue.map((valData,i)=><h1 key={i}>{valData}</h1>)} */}
                from operation:{allValue}
    </div>
    </div>
);    
}


export default Operations;
