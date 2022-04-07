import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Homepage.css";
import bgimg from "./../../images/background.jpg";
import uae_front from "./../../images/homepage_bg.jpg";

import ApplySlider from "../../components/ApplySlider/ApplySlider";
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
			<ApplySlider />
		</div>
	);
};

export default Homepage;
