import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Homepage.css";
import bgimg from "./../../images/background.jpg";
import uae_front from "./../../images/homepage_bg.jpg";
import { Grow, Slide, Typography } from "@mui/material";
const Homepage = () => {
	const isMobile = useMediaQuery({
		query: "(max-width: 786px)",
	});
	const renderFrontImageMobile = () => {
		return (
			<>
				<img src={uae_front} alt="" width="100%" height="100%" />
			</>
		);
	};
	const renderFrontImageDesktop = () => {
		return (
			<div
				style={{
					width: "100%",
					textAlign: "center",
					height: "100%",
					paddingTop: "40px",
				}}
			>
				<img src={uae_front} alt="" width="500px" height="100%" />
			</div>
		);
	};
	const [growText, setGrowText] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setGrowText(true);
		}, 2000);
	});
	const containerRef = useRef(null);
	return (
		<div
			className="homepage"
			style={{
				backgroundImage: `url(${bgimg})`,
				backgroundRepeat: "repeat-y",
			}}
		>
			<>
				{isMobile
					? renderFrontImageMobile()
					: renderFrontImageDesktop()}
			</>
			<div className="animated-text" ref={containerRef}>
				<Slide
					in={growText}
					direction="right"
					container={containerRef.current}
				>
					<Typography variant="h4">
						Welcome to United Air Express
					</Typography>
				</Slide>
			</div>
		</div>
	);
};

export default Homepage;
