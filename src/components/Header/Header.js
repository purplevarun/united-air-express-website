import { AppBar, IconButton, Typography } from "@mui/material";
import React from "react";
import "./Header.css";
import { FiPackage } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import DesktopMenu from "./../Menu/DesktopMenu";
import MobileMenu from "./../Menu/MobileMenu";
import DarkModeButton from "./../Menu/DarkModeButton";
import { useNavigate } from "react-router-dom";
const Header = ({ darkMode, setDarkMode }) => {
	const isMobile = useMediaQuery({
		query: "(max-width: 786px)",
	});
	const toggleColorMode = () => {
		setDarkMode(!darkMode);
	};
	const darkModeProps = {
		// this is different from the darkModeProps in Router.js
		// this one has "toggleColorMode" instead of "setDarkMode"
		darkMode,
		toggleColorMode,
	};
	const navigate = useNavigate();

	const navigator = {
		gotoHomepage: () => navigate("/"),
		gotoAboutpage: () => navigate("/about"),
		gotoApplypage: () => navigate("/apply"),
		gotoGallerypage: () => navigate("/gallery"),
	};
	return (
		<div className="header">
			<AppBar position="fixed" color="primary">
				<div className="appbar">
					<div className="left">
						<IconButton
							color="inherit"
							style={{ borderRadius: "0" }}
						>
							<FiPackage />
							&nbsp;
							<Typography variant="h5" align="center">
								United Air Express
							</Typography>
						</IconButton>
					</div>
					<div className="right">
						{isMobile ? (
							<MobileMenu {...navigator} />
						) : (
							<DesktopMenu {...navigator} />
						)}
						<DarkModeButton {...darkModeProps} />
					</div>
				</div>
			</AppBar>
		</div>
	);
};

export default Header;
