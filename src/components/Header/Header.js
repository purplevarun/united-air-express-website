import {
	AppBar,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { FiPackage } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { TiThMenuOutline } from "react-icons/ti";
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
					<MenuItem onClick={closeMobileMenu}>Profile</MenuItem>
					<MenuItem onClick={closeMobileMenu}>My account</MenuItem>
					<MenuItem onClick={closeMobileMenu}>Logout</MenuItem>
				</Menu>
			</>
		);
	};
	const renderDesktopMenu = () => {
		return <h1>desktop</h1>;
	};
	return (
		<div className="header">
			<AppBar position="fixed" color="secondary">
				<div className="appbar">
					<div className="left">
						<IconButton color="inherit">
							<FiPackage />
						</IconButton>
						<Typography variant="h5" align="center">
							United Air Express
						</Typography>
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
