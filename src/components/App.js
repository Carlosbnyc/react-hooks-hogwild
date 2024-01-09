import React from "react";
import Nav from "./Nav";
import HogsList from "./HogsList"
import HogCard from "./HogCard";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogsList hogs={hogs}/>
		
		</div>
	);
}

export default App;
 