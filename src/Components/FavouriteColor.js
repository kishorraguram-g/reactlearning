import { useState } from "react";

function FavouriteColor(){
    // let color='Blue'

    const [color,SetColor]=useState('Blue')

  return   <>
   <h1>My Favourite Color is {color}</h1>
     <button onClick={()=>{color=='Red'?SetColor('Blue'):SetColor('Red')}} >Change Color</button>
        </>
}

export default FavouriteColor