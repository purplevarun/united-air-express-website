import { IconButton } from "@mui/material";
import React from "react";
import { RiHome2Fill, RiFolderInfoFill } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
const DesktopMenu = () => {
	return (
		<>
			<IconButton
				color="inherit"
				size="large"
				style={{ borderRadius: "0", marginRight: "10px" }}
			>
				<RiHome2Fill />
				&nbsp; Home
			</IconButton>
			<IconButton
				color="inherit"
				size="large"
				style={{ borderRadius: "0", marginRight: "10px" }}
			>
				<FaNewspaper />
				&nbsp; Apply
			</IconButton>
			<IconButton
				color="inherit"
				size="large"
				style={{ borderRadius: "0", marginRight: "10px" }}
			>
				<IoMdPhotos />
				&nbsp; Gallery
			</IconButton>
			<IconButton
				color="inherit"
				size="large"
				style={{ borderRadius: "0", marginRight: "10px" }}
			>
				<RiFolderInfoFill /> &nbsp; About
			</IconButton>
		</>
	);
};

export default DesktopMenu;
