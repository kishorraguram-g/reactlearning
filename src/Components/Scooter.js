import { useState } from "react"
function Scooter(){
    // const [color,setColor]=useState("Red")
    // const [brand,SetBrand]=useState("Honda")
    // const [model,setModel]=useState("Activa 5G")
    // const [year,setYear]=useState("2020")
    const [scooter,setScooter]=useState({
        color:"Red",
        brand:"Honda",
        model:"Activa 5G",
        year:"2020"
    })

    function updateScooter(){
        setScooter(previousState=>{
            return {...previousState,color:"Blue"}
        })
    }

    // console.log('Current State',scooter)
    return <>
    <h1>My Scooter</h1>
    <p>Color:{scooter.color}</p>
    <p>Brand:{scooter.brand}</p>
    <p>Model:{scooter.model}</p>
    <p>Year:{scooter.year}</p>
    <button onClick={updateScooter}>Change color</button>
    </>
}

export default Scooter