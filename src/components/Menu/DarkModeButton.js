import { IconButton } from "@mui/material";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const DarkModeButton = ({ darkMode, toggleColorMode }) => {
	return (
		<div>
			<IconButton
				color="inherit"
				size="large"
				style={{ borderRadius: "0", marginRight: "10px" }}
				onClick={toggleColorMode}
			>
				{darkMode ? <MdDarkMode /> : <MdLightMode />}
			</IconButton>
		</div>
	);
};

export default DarkModeButton;
