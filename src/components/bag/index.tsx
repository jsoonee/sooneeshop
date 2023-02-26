import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectBag } from "@/redux/modules/bagSlice";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import UpcomingOutlinedIcon from "@mui/icons-material/UpcomingOutlined";

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
const BtnWrapper = styled.div`
	display: flex;
	justify-content: center;
`;
const BtnStyle = styled(Button)`
	padding: 1rem 2rem;
	margin: 1rem;
	border-radius: 30px;
	width: 100%;
`;
const Empty = styled(Wrapper)`
	flex-flow: column;
	align-items: center;
	font-size: 2rem;
	text-align: center;
`;

const Bag = () => {
	const bag = useSelector(selectBag);
	return bag.length ? (
		<Wrapper>
			<Container>
				<Title>my bag</Title>
				<BagList />
				<PriceTable />
				<BtnWrapper>
					<BtnStyle variant="contained" startIcon={<CheckCircleOutlineIcon />}>
						Proceed to Checkout
					</BtnStyle>
				</BtnWrapper>
			</Container>
		</Wrapper>
	) : (
		<Empty>
			<UpcomingOutlinedIcon sx={{ fontSize: "10rem" }} />
			<div>Your bag is empty..</div>
		</Empty>
	);
};

export default Bag;
