

function HogDetails ({name,specialty,greased,weight,medal,image}){
console.log(name)
    return(
        <>
          <p>{specialty}</p>
          <p>{greased}</p>
          <p>{weight}</p>
          <p>{medal}</p>
        </>
    )

}

export default HogDetails