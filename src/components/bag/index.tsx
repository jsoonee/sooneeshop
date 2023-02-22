import styled from "styled-components";
import { Title } from "../products";
import BagList from "./BagList";

const Wrapper = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: center;
`;
const ListContainer = styled.div`
	width: 100%;
`;
const PriceContainer = styled.div``;

const Bag = () => {
	return (
		<Wrapper>
			<ListContainer>
				<Title>my bag</Title>
				<BagList />
			</ListContainer>
			<PriceContainer></PriceContainer>
		</Wrapper>
	);
};

export default Bag;
