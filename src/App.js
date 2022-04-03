import "./App.css";
import Router from "./Router";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
function App() {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div className="App">
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<CssBaseline />
				<Router darkMode={darkMode} setDarkMode={setDarkMode} />
			</ThemeProvider>
		</div>
	);
}

export default App;
