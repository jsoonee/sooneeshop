import styled from "styled-components";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import BagIcon from "./BagIcon";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/modules/themeSlice";

const Wrapper = styled.header<{ isDark: boolean }>`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100vw;
	height: 75px;
	z-index: 3;
	background-color: ${({ isDark }) =>
		isDark ? "rgba(18,18,18,0.9)" : "rgba(255,255,255,0.9)"};
`;
const Container = styled.div`
	display: flex;
	max-width: 1200px;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	@media screen and (max-width: 480px) {
		padding: 0 1rem;
	}
`;
const Logo = styled.div<{ isDark: boolean }>`
	font-family: "Lora", serif;
	font-size: 1.7rem;
	:hover {
		color: ${({ isDark }) => (isDark ? "#ccbbaa" : "#947d65")};
	}
	@media screen and (max-width: 480px) {
		font-size: 1.4rem;
	}
`;

const Menu = styled.div`
	display: flex;
`;

const Header = () => {
	const { isDark } = useSelector(selectTheme);
	return (
		<Wrapper isDark={isDark}>
			<Container className="header">
				<Logo isDark={isDark}>
					<Link href="/">SOONEESHOP</Link>
				</Logo>
				<Menu>
					<ThemeToggle />
					<BagIcon />
				</Menu>
			</Container>
		</Wrapper>
	);
};

export default Header;
