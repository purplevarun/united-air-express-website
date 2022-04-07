import React, { useEffect, useState } from "react";
import "./Gallery.css";
import gallery1 from "./../../images/gallery1.jpeg";
import gallery2 from "./../../images/gallery2.jpg";
import gallery3 from "./../../images/gallery3.jpg";
import gallery4 from "./../../images/gallery4.jpg";
import gallery5 from "./../../images/gallery5.jpeg";
import gallery6 from "./../../images/gallery6.jpg";
import gallery7 from "./../../images/gallery7.jpeg";
import gallery8 from "./../../images/gallery8.jpg";
import { Slide } from "@mui/material";
import { useMediaQuery } from "react-responsive";
const Gallery = ({ backgroundStyles }) => {
	const isMobile = useMediaQuery({
		query: "(max-width: 786px)",
	});
	const images = [
		gallery1,
		gallery2,
		gallery3,
		gallery4,
		gallery5,
		gallery6,
		gallery7,
		gallery8,
	];
	const len = images.length;
	const [slideOn, setSlideOn] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);
	const [slideDirection, setSlideDirection] = useState("right");
	useEffect(() => {
		setSlideOn(true);
		setTimeout(() => {
			setSlideOn(false);
			setTimeout(() => {
				setImageIndex((imageIndex + 1) % len);
				setSlideDirection(
					slideDirection === "right" ? "left" : "right"
				);
			}, 1000);
		}, 1000);
	}, [imageIndex]);
	return (
		<div className="gallery" style={backgroundStyles}>
			<div className="slideshow-wrapper">
				<Slide direction={slideDirection} in={slideOn}>
					<img
						src={images[imageIndex]}
						alt=""
						width={isMobile ? "100%" : "500px"}
					/>
				</Slide>
			</div>
		</div>
	);
};

export default Gallery;
