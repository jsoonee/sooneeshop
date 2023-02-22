import styled from "styled-components";
import { ILayout } from "../Layout";

const Wrapper = styled.main`
	display: flex;
	justify-content: center;
	width: 100%;
	min-height: calc(100vh - 175px);
	font-weight: 300;
	padding-bottom: 5rem;
`;

const Flex = styled.div`
	max-width: 1200px;
	width: 100%;
`;

const Main = ({ children }: ILayout) => {
	return (
		<Wrapper>
			<Flex>{children}</Flex>
		</Wrapper>
	);
};

export default Main;
