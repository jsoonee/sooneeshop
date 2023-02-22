import styled from "styled-components";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import BagIcon from "./BagIcon";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/modules/themeSlice";

const Wrapper = styled.header`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1200px;
	width: 100%;
	height: 75px;
`;

const Logo = styled.div<{ isDark: boolean }>`
	font-family: "Lora", serif;
	font-size: 1.7rem;
	margin-left: 2rem;
	:hover {
		color: ${({ isDark }) => (isDark ? "#ccbbaa" : "#947d65")};
	}
`;

const Menu = styled.div`
	display: flex;
	margin-right: 2rem;
`;

const Header = () => {
	const { isDark } = useSelector(selectTheme);
	return (
		<Wrapper>
			<Container>
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
