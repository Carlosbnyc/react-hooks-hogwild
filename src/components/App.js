import React, {useState} from "react";
import Nav from "./Nav";
import HogsList from "./HogsList"
import HogCard from "./HogCard";

import hogs from "../porkers_data";

function App() {

	const [selectedCategory,setSelectedCategory]= useState ("")

	function onCategoryChange (category){
		setSelectedCategory(category)
	
	}


	const filteredHogs = hogs.filter ((hog) => {
		if (hog.greased === true&&selectedCategory=== "greased"){
			return hog
		}

		if (hog.greased === false&&selectedCategory==="not-greased"){
			return hog
		}

		if  (selectedCategory===""){
			return hog
		}
	})

	const [sortedCategory, setSortedCategory]=useState("")
    const sortedHogs = filteredHogs.sort ((a,b)=>{
		if (sortedCategory === "weight") {
			return a.weight - b.weight 
		}
		else {
			return a.name - b.name
		}
	}
		
	)

	return (
		<div  className="App">
			<Nav onCategoryChange={onCategoryChange}/>
			<button onClick={()=>setSortedCategory("name")} >Sort by Name</button>
			<button onClick={()=>setSortedCategory("weight")} >Sort by Weight</button>
			<HogsList hogs={sortedHogs}/>
			
		</div>
	);
}

export default App;
 