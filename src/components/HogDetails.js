

function HogDetails ({name,specialty,greased,weight,medal,image}){
    return(
        <>
          <p>{specialty}</p>
          {greased? <p>greased</p>: <p>not-greased</p>}
          <p>{weight}</p>
          <p>{medal}</p>
        </>
    )

}

export default HogDetails