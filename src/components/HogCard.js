import React, {useState} from "react"
import HogDetails from "./HogDetails"


function HogCard({name,specialty,greased,weight,image,medal}){
    const [showDetails,setshowDetails] = useState (false)
    function Clickable(){
setshowDetails(!showDetails)
        }

      return(
        <>
        <div onClick={()=>Clickable()}>
        <h1>{name}</h1>
        <img src={image}/>
        {showDetails? <HogDetails key={name} name={name} specialty={specialty} greased={greased} weight={weight} medal={medal} image={image}/>:""}
        </div>
        </>
    )
}

export default HogCard