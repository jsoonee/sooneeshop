import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
	interface Palette {
		basic: {
			main: string;
			contrastText: string;
		};
	}
	interface PaletteOptions {
		basic?: {
			main: string;
			contrastText: string;
		};
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		basic: true;
	}
}

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		basic: {
			main: "rgba(0,0,0,0.87)",
			contrastText: "#fff",
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		basic: {
			main: "#fff",
			contrastText: "rgba(0,0,0,0.87)",
		},
	},
});
