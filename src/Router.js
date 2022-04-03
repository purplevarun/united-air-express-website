import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Homepage from "./pages/Homepage/Homepage";

const Router = ({ darkMode, setDarkMode }) => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						element={
							<Homepage
								darkMode={darkMode}
								setDarkMode={setDarkMode}
							/>
						}
						path="/"
						exact
					/>
					<Route
						element={
							<About
								darkMode={darkMode}
								setDarkMode={setDarkMode}
							/>
						}
						path="/about"
						exact
					/>
					<Route
						element={
							<Homepage
								darkMode={darkMode}
								setDarkMode={setDarkMode}
							/>
						}
						path="*"
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
