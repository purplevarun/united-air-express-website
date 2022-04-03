import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./../pages/About/About";
import Homepage from "./../pages/Homepage/Homepage";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import "./Router.css";
const Router = ({ darkMode, setDarkMode }) => {
	const darkModeProps = {
		darkMode,
		setDarkMode,
	};
	return (
		<div className="mainbody">
			<Header {...darkModeProps} />
			<div className="routes">
				<BrowserRouter>
					<Routes>
						<Route element={<Homepage />} path="/" exact />
						<Route element={<About />} path="/about" exact />
						<Route element={<Homepage />} path="*" />
					</Routes>
				</BrowserRouter>
			</div>
			<Footer {...darkModeProps} />
		</div>
	);
};

export default Router;
