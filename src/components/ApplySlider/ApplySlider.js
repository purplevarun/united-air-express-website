import { Slide, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplySlider.css";
const ApplySlider = () => {
	const navigate = useNavigate();
	const gotoApplypage = () => {
		navigate("/apply");
	};

	const [growHeader, setGrowHeader] = useState(false);
	const [growText, setGrowText] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setGrowHeader(true);
		}, 1000);
		setTimeout(() => {
			setGrowText(true);
		}, 3000);
	}, []);
	return (
		<div className="animated-text">
			<Typography variant="h6" fontWeight="600">
				Welcome to
			</Typography>
			<Slide in={growHeader} direction="up">
				<Typography variant="h4" color="red">
					United Air Express
				</Typography>
			</Slide>
			<div className="animated-text-apply">
				<Slide in={growText} direction="left">
					<Typography variant="h5">
						Click{" "}
						<span className="clickable" onClick={gotoApplypage}>
							here
						</span>{" "}
						to apply for job
					</Typography>
				</Slide>
			</div>
		</div>
	);
};

export default ApplySlider;
