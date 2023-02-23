import styled from "styled-components";
import BagList from "./BagList";
import PriceTable from "./PriceTable";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;
const Container = styled.div`
	max-width: 1000px;
	width: 100%;
	padding: 0 2rem;
	@media screen and (max-width: 768px) {
		padding: 0 1rem;
	}
`;
const Title = styled.div`
	font-weight: 300;
	font-size: 2rem;
	text-align: center;
	margin-top: 2rem;
`;
const PriceContainer = styled.div``;
const EmptyContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Bag = () => {
	return (
		<Wrapper>
			<Container>
				<Title>my bag</Title>
				<BagList />
				<PriceTable />
			</Container>
		</Wrapper>
	);
};

export default Bag;
