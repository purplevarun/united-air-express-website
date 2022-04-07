import { Typography } from "@mui/material";
import React from "react";
import "./About.css";
const About = ({ backgroundStyles }) => {
	return (
		<div className="about" style={backgroundStyles}>
			<Typography>About United Air Express</Typography>
		</div>
	);
};

export default About;
