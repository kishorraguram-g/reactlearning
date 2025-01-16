import { useEffect, useState } from "react"

function Timer(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("screen rendered")
        // checkCount()
        // setCount(1)
        setTimeout(() => {
            setCount((previousState)=>{return previousState+1})
        }, 1000);
    })
   
    
    function updateCount(){
        setCount((prevoiuscount)=>{return prevoiuscount+1})
    }

    function checkCount(){
        if(count>10) setCount(1)
    }
    
    return<>
     <h1>hi im a rendered {count} times</h1>
     <button onClick={updateCount} >Increase Count</button>
     </>
}

export default Timer