import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({onCategoryChange}) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
			<select onChange={(e)=>onCategoryChange(e.target.value)}>
				<option>greased</option>
				<option>not-greased</option>
			</select>
			</div>
		</div>
	);
};

export default Nav;
