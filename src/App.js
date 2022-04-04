import "./App.css";
import Router from "./router/Router";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
function App() {
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {
		const defaultTheme = localStorage.getItem("defaultTheme");
		if (defaultTheme) {
			if (defaultTheme === "light") {
				setDarkMode(false);
			} else {
				setDarkMode(true);
			}
		}
	}, []);
	const setDarkModeAndSave = () => {
		setDarkMode(!darkMode);
		if (darkMode) {
			localStorage.setItem("defaultTheme", "light");
		} else {
			localStorage.setItem("defaultTheme", "dark");
		}
	};
	return (
		<div className="App">
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<CssBaseline />
				<Router darkMode={darkMode} setDarkMode={setDarkModeAndSave} />
			</ThemeProvider>
		</div>
	);
}

export default App;
