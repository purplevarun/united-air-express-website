import { Checkbox, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Apply.css";
import ApplyButton from "./ApplyButton/ApplyButton";
import apply_page_pic from "./../../images/apply_page.jpg";
import { useMediaQuery } from "react-responsive";
const Apply = ({ backgroundStyles, darkMode }) => {
	const isMobile = useMediaQuery({
		query: "(max-width: 786px)",
	});
	const [isChecked, setIsChecked] = useState(false);
	return (
		<div className="apply" style={backgroundStyles}>
			<div className="image-wrapper">
				<img
					src={apply_page_pic}
					alt=""
					width={isMobile ? "100%" : "500px"}
				/>
			</div>
			<div className="description-wrapper">
				<Typography fontSize={15}>
					We are hiring for Asansol, Chittaranjan, Purulia and
					Raghunatpur.
				</Typography>
				<br />
				<Typography fontSize={18}>
					Open Positions :{" "}
					<span className="supervisor">Supervisor</span>,{" "}
					<span className="station-staff">Station Staff</span>,{" "}
					<span className="delivery-ass">Delivery Associate</span>,{" "}
					<span className="loader">Loader/Unloader</span>
				</Typography>
			</div>
			<div className="checkbox-wrapper">
				<Checkbox
					checked={isChecked}
					onChange={() => setIsChecked(!isChecked)}
				/>
				<Typography fontWeight="bold">
					I Agree that I am atleast 18 years old
				</Typography>
			</div>
			<div className="apply-btn-wrapper">
				{isChecked && <ApplyButton darkMode={darkMode} />}
			</div>
		</div>
	);
};

export default Apply;
