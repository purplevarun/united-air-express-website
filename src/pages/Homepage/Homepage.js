import React from "react";
import Header from "./../../components/Header/Header";
const Homepage = ({ darkMode, setDarkMode }) => {
	return (
		<div className="homepage">
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />
		</div>
	);
};

export default Homepage;
