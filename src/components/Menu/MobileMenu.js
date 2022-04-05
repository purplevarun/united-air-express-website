import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

const MobileMenu = ({
	gotoHomepage,
	gotoAboutpage,
	gotoGallerypage,
	gotoApplypage,
}) => {
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
				<MenuItem onClick={gotoHomepage}>Home</MenuItem>
				<MenuItem onClick={gotoApplypage}>Apply</MenuItem>
				<MenuItem onClick={gotoGallerypage}>Gallery</MenuItem>
				<MenuItem onClick={gotoAboutpage}>About</MenuItem>
			</Menu>
		</>
	);
};

export default MobileMenu;
