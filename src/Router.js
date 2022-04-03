import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Homepage from "./pages/Homepage/Homepage";

const Router = ({ darkMode, setDarkMode }) => {
	const darkModeProps = {
		darkMode,
		setDarkMode,
	};
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						element={<Homepage {...darkModeProps} />}
						path="/"
						exact
					/>
					<Route
						element={<About {...darkModeProps} />}
						path="/about"
						exact
					/>
					<Route element={<Homepage {...darkModeProps} />} path="*" />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
