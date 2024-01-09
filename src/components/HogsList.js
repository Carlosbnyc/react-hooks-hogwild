import HogCard from "./HogCard"


function HogsList({hogs}) {
   const hogCards=  hogs.map((hog) => <HogCard key={hog.id} hog={hog} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} image={hog.image}/>)
   return(
   <div>
    {hogCards}
  </div>
   )
}

export default HogsList
 