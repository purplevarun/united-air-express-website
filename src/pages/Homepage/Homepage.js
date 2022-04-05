import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Homepage.css";
import bgimg from "./../../images/background.jpg";
import uae_front from "./../../images/homepage_bg.jpg";
import { Slide, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();
	const gotoApplypage = () => {
		navigate("/apply");
	};
	const gotoAboutpage = () => {
		navigate("/about");
	};
	const gotoGallerypage = () => {
		navigate("/gallery");
	};
	const [growText, setGrowText] = useState({
		first: false,
		second: false,
		third: false,
		fourth: false,
	});
	useEffect(() => {
		setTimeout(() => {
			setGrowText({
				first: true,
				second: false,
				third: false,
				fourth: false,
			});
			setTimeout(() => {
				setGrowText({
					first: true,
					second: true,
					third: false,
					fourth: false,
				});
				setTimeout(() => {
					setGrowText({
						first: true,
						second: true,
						third: true,
						fourth: false,
					});
					setTimeout(() => {
						setGrowText({
							first: true,
							second: true,
							third: true,
							fourth: true,
						});
					}, 2000);
				}, 2000);
			}, 2000);
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
			<>
				{isMobile
					? renderFrontImageMobile()
					: renderFrontImageDesktop()}
			</>
			<div className="animated-text">
				<Typography variant="h6" fontWeight="600">
					Welcome to
				</Typography>
				<Slide in={growText.first} direction="up">
					<Typography variant="h4" color="red">
						United Air Express
					</Typography>
				</Slide>
				<div className="animated-text-loop">
					<Slide in={growText.second} direction="left">
						<Typography variant="h5">
							Click{" "}
							<span className="clickable" onClick={gotoApplypage}>
								here
							</span>{" "}
							to apply for job
						</Typography>
					</Slide>
					<Slide in={growText.third} direction="right">
						<Typography variant="h5">
							Click{" "}
							<span
								className="clickable"
								onClick={gotoGallerypage}
							>
								here
							</span>{" "}
							to check out our office
						</Typography>
					</Slide>
					<Slide in={growText.fourth} direction="left">
						<Typography variant="h5">
							Click{" "}
							<span className="clickable" onClick={gotoAboutpage}>
								here
							</span>{" "}
							to know more about us
						</Typography>
					</Slide>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
