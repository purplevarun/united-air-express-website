import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Homepage from "./pages/Homepage/Homepage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route element={<Homepage />} path="/" exact />
					<Route element={<About />} path="/about" exact />
					<Route element={<Homepage />} path="*" />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
