import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

const MobileMenu = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const toggleMobileMenu = (event) => {
		setOpenMenu(event.currentTarget);
	};
	const closeMobileMenu = () => {
		setOpenMenu(null);
	};
	return (
		<>
			<IconButton
				color="inherit"
				size="large"
				onClick={toggleMobileMenu}
				style={{ borderRadius: 0 }}
			>
				<TiThMenuOutline />
			</IconButton>
			<Menu open={openMenu} anchorEl={openMenu} onClose={closeMobileMenu}>
				<MenuItem onClick={closeMobileMenu}>Home</MenuItem>
				<MenuItem onClick={closeMobileMenu}>Apply</MenuItem>
				<MenuItem onClick={closeMobileMenu}>Gallery</MenuItem>
				<MenuItem onClick={closeMobileMenu}>About</MenuItem>
			</Menu>
		</>
	);
};

export default MobileMenu;
