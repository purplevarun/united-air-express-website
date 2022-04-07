import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./../pages/About/About";
import Homepage from "./../pages/Homepage/Homepage";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import Gallery from "./../pages/Gallery/Gallery";
import Apply from "./../pages/Apply/Apply";
import bgimg from "./../images/background.jpg";
import "./Router.css";
const Router = ({ darkMode, setDarkMode }) => {
	const darkModeProps = {
		darkMode,
		setDarkMode,
	};
	const backgroundStyles = {
		backgroundImage: `url(${bgimg})`,
		backgroundRepeat: "repeat-y",
	};
	return (
		<div className="mainbody">
			<div className="routes">
				<BrowserRouter>
					<Header {...darkModeProps} />
					<Routes>
						<Route
							element={
								<Homepage backgroundStyles={backgroundStyles} />
							}
							path="/"
							exact
						/>
						<Route
							element={
								<About backgroundStyles={backgroundStyles} />
							}
							path="/about"
							exact
						/>
						<Route
							element={
								<Apply
									backgroundStyles={backgroundStyles}
									{...darkModeProps}
								/>
							}
							path="/apply"
							exact
						/>
						<Route
							element={
								<Gallery backgroundStyles={backgroundStyles} />
							}
							path="/gallery"
							exact
						/>
						<Route
							element={
								<Homepage backgroundStyles={backgroundStyles} />
							}
							path="*"
						/>
					</Routes>
				</BrowserRouter>
			</div>
			<Footer {...darkModeProps} />
		</div>
	);
};

export default Router;
