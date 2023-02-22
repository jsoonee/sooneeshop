import styled from "styled-components";
import Filter from "./Filter";
import List from "./List";

const Wrapper = styled.div`
	width: 100%;
`;
const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 2rem;
	@media screen and (max-width: 480px) {
		padding: 2rem 1rem;
	}
	@media screen and (max-width: 768px) {
		justify-content: center;
		flex-direction: column;
	}
`;
export const Title = styled.h1`
	font-weight: 300;
	font-size: 1.5rem;
	text-align: center;
`;

const Products = () => {
	return (
		<Wrapper>
			<Top>
				<Title>products</Title>
				<Filter />
			</Top>
			<List />
		</Wrapper>
	);
};

export default Products;
