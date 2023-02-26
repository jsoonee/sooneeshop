import styled from "styled-components";
import { ILayout } from "../Layout";

const Wrapper = styled.main`
	display: flex;
	justify-content: center;
	width: 100%;
	min-height: calc(100vh - 100px);
	font-weight: 300;
	padding: 75px 0;
`;

const Main = ({ children }: ILayout) => {
	return <Wrapper>{children}</Wrapper>;
};

export default Main;
