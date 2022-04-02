import { AppBar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Header.css";
import { FiPackage } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { TiThMenuOutline } from "react-icons/ti";
import { RiHome2Fill, RiFolderInfoFill } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const toggleMobileMenu = (event) => {
		setOpenMenu(event.currentTarget);
	};
	const closeMobileMenu = () => {
		setOpenMenu(null);
	};
	const isMobile = useMediaQuery({
		query: "(max-width: 786px)",
	});
	const renderMobileMenu = () => {
		return (
			<>
				<IconButton
					color="inherit"
					size="large"
					onClick={toggleMobileMenu}
				>
					<TiThMenuOutline />
				</IconButton>
				<Menu
					open={openMenu}
					anchorEl={openMenu}
					onClose={closeMobileMenu}
				>
					<MenuItem onClick={closeMobileMenu}>Home</MenuItem>
					<MenuItem onClick={closeMobileMenu}>Apply</MenuItem>
					<MenuItem onClick={closeMobileMenu}>Gallery</MenuItem>
					<MenuItem onClick={closeMobileMenu}>About</MenuItem>
				</Menu>
			</>
		);
	};
	const renderDesktopMenu = () => {
		return (
			<>
				<IconButton
					color="inherit"
					size="large"
					style={{ borderRadius: "0", marginRight: "10px" }}
				>
					<RiHome2Fill />
					&nbsp; Menu
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
	return (
		<div className="header">
			<AppBar position="fixed" color="secondary">
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
						{isMobile ? renderMobileMenu() : renderDesktopMenu()}
					</div>
				</div>
			</AppBar>
		</div>
	);
};

export default Header;
