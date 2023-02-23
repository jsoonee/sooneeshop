import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { edit, selectBag } from "@/redux/modules/bagSlice";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Link from "next/link";
import Typography from "@mui/material/Typography";

const ListStyle = styled(List)`
	margin-bottom: 2rem;
`;
const ListItemStyle = styled(ListItem)`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	padding: 2rem 0;
`;
const Left = styled.div`
	display: flex;
	align-items: center;
`;
const ImageContainer = styled.div`
	display: flex;
	width: 150px;
	height: 150px;
	.img {
		display: block;
		position: relative !important;
		height: unset !important;
	}

	@media screen and (max-width: 768px) {
		width: 100px;
		height: 100px;
	}
	@media screen and (max-width: 480px) {
		width: 75px;
		height: 75px;
	}
`;
const Info = styled.div`
	padding: 0 2rem;
	@media screen and (max-width: 768px) {
		padding: 0 1rem;
	}
`;
const Name = styled.div`
	font-size: 1.2rem;
	@media screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;
const Cat = styled(Typography)`
	font-size: 1.1rem;
	@media screen and (max-width: 768px) {
		font-size: 0.9rem;
	}
`;
const Price = styled.div`
	font-size: 1.1rem;
	padding: 1rem 0;
	white-space: nowrap;
	@media screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;
const Options = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin-top: 1rem;
	> * {
		margin-top: 0.5rem;
	}
`;
const Size = styled(FormControl)``;
const Qty = styled(FormControl)`
	margin-left: 1rem;
	@media screen and (max-width: 480px) {
		margin-left: 0.5rem;
	}
`;

const BagList = () => {
	const dispatch = useDispatch();
	const list = useSelector(selectBag);
	console.log(list);
	const handleSizeChange = (e: SelectChangeEvent, idx: number) => {
		dispatch(edit({ idx, size: e.target.value }));
	};
	const handleQtyChange = (e: SelectChangeEvent<number>, idx: number) => {
		dispatch(edit({ idx, qty: +e.target.value }));
	};
	return (
		<ListStyle>
			{list.map(({ id, name, cat, price, sizes, size, qty }, idx) => (
				<div key={idx}>
					<ListItemStyle>
						<Left>
							<Link href={`/products/${name.split(" ").join("-")}/${id}`}>
								<ImageContainer>
									<Image
										src={`/images/${id}-600w.webp`}
										alt={name}
										fill
										className="img"
									/>
								</ImageContainer>
							</Link>
							<Info>
								<Link href={`/products/${name.split(" ").join("-")}/${id}`}>
									<Name>{name}</Name>
								</Link>
								<Cat color="text.secondary">{cat}</Cat>
								<Options>
									<Size>
										<InputLabel>Size</InputLabel>
										<Select
											autoWidth
											value={size}
											label="Size"
											onChange={(e) => handleSizeChange(e, idx)}
											size="small"
											MenuProps={{ disableScrollLock: true }}
										>
											{sizes.map((val, idx) => (
												<MenuItem key={idx} value={val}>
													{val}
												</MenuItem>
											))}
										</Select>
									</Size>
									<Qty>
										<InputLabel>Qty</InputLabel>
										<Select
											autoWidth
											value={qty}
											label="Qty"
											size="small"
											onChange={(e) => handleQtyChange(e, idx)}
										>
											{[...Array(10)].map((_, i) => (
												<MenuItem key={i + 1} value={i + 1}>
													{i + 1}
												</MenuItem>
											))}
										</Select>
									</Qty>
								</Options>
							</Info>
						</Left>
						<Price>₩ {(+price * +qty).toLocaleString("ko-KR")}</Price>
					</ListItemStyle>
					<Divider component="li" />
				</div>
			))}
		</ListStyle>
	);
};

export default BagList;
