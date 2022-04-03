import { IconButton, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaWhatsappSquare,
} from "react-icons/fa";
import { GiClick } from "react-icons/gi";
const Footer = ({ darkMode }) => {
	const getBg = () => {
		if (darkMode) return "orange";
		else return "black";
	};
	const getFg = () => {
		if (darkMode) return "black";
		else return "white";
	};
	const footerStyles = {
		backgroundColor: getBg(),
		color: getFg(),
		padding: "0px",
		display: "flex",
		justifyContent: "space-evenly",
		flexDirection: "column",
		alignItems: "center",
	};
	const gotoVarunProfile = () => {
		const varunLinkedIn = "https://www.linkedin.com/in/purplevarun/";
		window.open(varunLinkedIn, "_blank");
	};
	const gotoFacebook = () => {};
	const gotoWhatsapp = () => {};
	const gotoTwitter = () => {};
	return (
		<div className="footer" style={footerStyles}>
			<Typography variant="body" style={{ paddingTop: "10px" }}>
				United Air Express Private Limited Est. 2022
			</Typography>
			<div className="social-icons">
				<IconButton color="inherit" size="large" onClick={gotoFacebook}>
					<FaFacebookSquare size="40px" />
				</IconButton>
				<IconButton color="inherit" size="large" onClick={gotoWhatsapp}>
					<FaWhatsappSquare size="40px" />
				</IconButton>
				<IconButton color="inherit" size="large" onClick={gotoTwitter}>
					<FaTwitterSquare size="40px" />
				</IconButton>
			</div>
			<Typography
				variant="caption"
				onClick={gotoVarunProfile}
				className="creds"
			>
				Made By Varun Kedia
				<IconButton color="inherit" size="medium">
					<GiClick />
				</IconButton>
			</Typography>
		</div>
	);
};

export default Footer;
