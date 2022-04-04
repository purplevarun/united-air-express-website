import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaWhatsappSquare,
} from "react-icons/fa";
import { GiClick } from "react-icons/gi";
const Footer = ({ darkMode }) => {
	const gotoVarunProfile = () => {
		const varunLinkedIn = "https://www.linkedin.com/in/purplevarun/";
		window.open(varunLinkedIn, "_blank");
	};
	const gotoFacebook = () => {};
	const gotoWhatsapp = () => {};
	const gotoTwitter = () => {};
	const getBgColor = () => {
		if (darkMode) return "black";
		else return "darkgray";
	};
	const getFgColor = () => {
		if (darkMode) return "white";
		else return "black";
	};
	return (
		<div
			style={{
				justifyContent: "center",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundColor: getBgColor(),
				color: getFgColor(),
			}}
		>
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
				variant="body2"
				onClick={gotoVarunProfile}
				className="creds"
			>
				Developed By Varun Kedia
				<IconButton color="inherit" size="medium">
					<GiClick />
				</IconButton>
			</Typography>
		</div>
	);
};

export default Footer;
