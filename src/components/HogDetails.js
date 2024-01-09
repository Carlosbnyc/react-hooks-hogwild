

function hogDetails (name,specialty,greased,weight,image){

    return(
        <>
          <h1>{name}</h1>
          <p>{specialty}</p>
          <p>{greased}</p>
          <p>{weight}</p>
          <img src={image}/>
          
        </>
    )

}

export default hogDetails