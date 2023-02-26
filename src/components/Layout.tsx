import { ReactNode } from "react";
import styled from "styled-components";
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

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;
const Container = styled.div`
	max-width: 1200px;
	width: 100%;
`;

const Layout = ({ children }: ILayout) => {
	const { isIdentified, isDark } = useSelector(selectTheme);

	return (
		<>
			{isIdentified ? (
				<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
					<CssBaseline />
					<Wrapper>
						<Container>
							<Header />
							<Main>{children}</Main>
							<Footer />
						</Container>
					</Wrapper>
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
