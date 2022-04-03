import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";

const darkTheme = createTheme({
	palette: {
		primary: blue,
		secondary: green,
		type: "dark",
	},
});
export default darkTheme;
