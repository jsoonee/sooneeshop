import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { selectTheme } from "@/redux/modules/themeSlice";
import { lightTheme, darkTheme } from "@/theme/theme";

import Header from "./header";
import Main from "./main";
import Footer from "./footer";

export interface ILayout {
	children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
	const { isIdentified, isDark } = useSelector(selectTheme);

	return (
		<>
			{isIdentified ? (
				<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
					<CssBaseline />
					<Header />
					<Main>{children}</Main>
					<Footer />
				</ThemeProvider>
			) : (
				<>
					<Header />
					<Main>{children}</Main>
					<Footer />
				</>
			)}
		</>
	);
};

export default Layout;
