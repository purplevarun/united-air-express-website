import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Homepage.css";
import bgimg from "./../../images/background.jpg";
import homepage_bg from "./../../images/homepage_bg.jpg";
import { Snackbar, SnackbarContent } from "@mui/material";
const Homepage = () => {
	const isMobile = useMediaQuery({
		query: "(max-width: 786px)",
	});
	const toastPosition = {
		vertical: "bottom",
		horizontal: "center",
	};
	const [openToast, setOpenToast] = useState(false);
	const closeToast = () => {
		setOpenToast(false);
	};
	useEffect(() => {
		setTimeout(() => {
			setOpenToast(true);
			setTimeout(() => {
				closeToast();
			}, 5000);
		}, 2000);
	}, []);
	return (
		<div
			className="homepage"
			style={{
				backgroundImage: `url(${bgimg})`,
				backgroundRepeat: "repeat-y",
			}}
		>
			<Snackbar
				open={openToast}
				onClose={closeToast}
				anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
			>
				<img
					src={homepage_bg}
					alt=""
					width={isMobile ? "100%" : "500px"}
				/>
			</Snackbar>
		</div>
	);
};

export default Homepage;
