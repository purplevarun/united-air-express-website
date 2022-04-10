import React, { useEffect, useState } from "react";
import "./Gallery.css";
import gallery1 from "./../../images/gallery1.jpg";
import gallery2 from "./../../images/gallery2.jpg";
import gallery3 from "./../../images/gallery3.jpg";
import gallery4 from "./../../images/gallery4.jpg";
import gallery5 from "./../../images/gallery5.jpg";
import gallery6 from "./../../images/gallery6.jpg";
import gallery7 from "./../../images/gallery7.jpg";
import gallery8 from "./../../images/gallery8.jpg";
import gallery9 from "./../../images/gallery9.jpg";
import gallery10 from "./../../images/gallery10.jpg";
import gallery11 from "./../../images/gallery11.jpg";
import gallery12 from "./../../images/gallery12.jpg";
import gallery13 from "./../../images/gallery13.jpg";
import gallery14 from "./../../images/gallery14.jpg";
import gallery15 from "./../../images/gallery15.jpg";
import gallery16 from "./../../images/gallery16.jpg";
import gallery17 from "./../../images/gallery17.jpg";
import gallery18 from "./../../images/gallery18.jpg";
import gallery19 from "./../../images/gallery19.jpg";

import { Slide } from "@mui/material";
import { useMediaQuery } from "react-responsive";
const Gallery = ({ backgroundStyles }) => {
	const isMobile = useMediaQuery({
		query: "(max-width: 786px)",
	});
	const images = [
		gallery2,
		gallery1,
		gallery3,
		gallery4,
		gallery5,
		gallery6,
		gallery7,
		gallery8,
		gallery9,
		gallery10,
		gallery11,
		gallery12,
		gallery13,
		gallery14,
		gallery15,
		gallery16,
		gallery17,
		gallery18,
		gallery19,
	];
	const len = images.length;
	const [slideOn, setSlideOn] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);
	const [slideDirection, setSlideDirection] = useState("right");
	useEffect(() => {
		setSlideOn(true);
		setTimeout(() => {
			setSlideOn(false);
		}, 4000);
		setTimeout(() => {
			setImageIndex((imageIndex + 1) % len);
			setSlideDirection(slideDirection === "right" ? "left" : "right");
		}, 4500);
	}, [imageIndex]);
	return (
		<div className="gallery" style={backgroundStyles}>
			<div className="slideshow-wrapper">
				<Slide direction={slideDirection} in={slideOn}>
					<img
						src={images[imageIndex]}
						alt=""
						width={isMobile ? "100%" : "500px"}
						style={{ maxHeight: "400px" }}
					/>
				</Slide>
			</div>
		</div>
	);
};

export default Gallery;
