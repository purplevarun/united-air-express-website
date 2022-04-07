import { Button, Typography } from "@mui/material";
import React from "react";
import { FaUserEdit } from "react-icons/fa";
import "./ApplyButton.css";
const ApplyButton = ({ darkMode }) => {
	const gotoApplyForm = () => {
		alert("pending!");
	};
	return (
		<div className="apply-button">
			<Button
				variant="contained"
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					alignContent: "center",
					borderRadius: "10px",
					width: "220px",
					height: "50px",
				}}
				color={!darkMode ? "primary" : "secondary"}
				onClick={gotoApplyForm}
			>
				<FaUserEdit style={{ borderRadius: "0px" }} size="30" />
				<Typography fontSize={15} variant="body1">
					Click to Apply
				</Typography>
			</Button>
		</div>
	);
};

export default ApplyButton;
