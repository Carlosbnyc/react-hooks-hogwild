import HogCard from "./HogCard"


function HogsList({hogs}) {
   const hogCards=  hogs.map((hog) => <HogCard key={hog.id} hog={hog} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal ={hog["highest medal achieved"]} image={hog.image}/>)
   return(
   <div className="ui eight wide column">
    <p>{hogCards}</p>
  </div>
   )
}

export default HogsList
 