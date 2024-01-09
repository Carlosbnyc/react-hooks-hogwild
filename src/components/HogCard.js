import React, {useState} from "react"
import HogDetails from "./HogDetails"


function HogCard({name,specialty,greased,weight,image}){
    
    const [showDetails,setshowDetails] = useState (false)
    function Clickable(){
setshowDetails(!showDetails)
        }

      return(
        <>
        <div onClick={()=>Clickable()}>
        <h1>{name}</h1>
        <img src={image}/>
        {showDetails? <div>{HogDetails}</div>:""}
        </div>
        </>
    )
}

export default HogCard