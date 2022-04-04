import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Homepage.css";
import bgimg from "./../../images/background.jpg";
const Homepage = () => {
	const isMobile = useMediaQuery({
		query: "(max-width: 786px)",
	});
	return (
		<div
			className="homepage"
			style={{
				backgroundImage: `url(${bgimg})`,
			}}
		></div>
	);
};

export default Homepage;
