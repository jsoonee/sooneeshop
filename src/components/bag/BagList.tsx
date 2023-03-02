import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { edit, remove, selectBag } from "@/redux/modules/bagSlice";
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
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

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
const Right = styled.div`
	display: flex;
	flex-direction: column;
	svg {
		display: block;
	}
`;
const ImageContainer = styled.div`
	position: relative;
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
	width: 100%;
	padding: 0 2rem;
	@media screen and (max-width: 480px) {
		padding: 0 0.5rem;
	}
`;
const Name = styled.div`
	font-size: 1.2rem;
	margin-left: 0.3rem;
	@media screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;
const Cat = styled(Typography)`
	font-size: 1.1rem;
	margin-left: 0.3rem;
	@media screen and (max-width: 768px) {
		font-size: 0.9rem;
	}
`;
const Price = styled.div`
	font-size: 1.1rem;
	white-space: nowrap;
	margin-left: auto;
	@media screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;
const Options = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	> * {
		margin: 0.3rem;
	}
	margin: 0.5rem 0;
	/* margin-top: 1rem;
	> * {
		margin-top: 0.5rem;
	} */
`;
const Size = styled(FormControl)``;
const Qty = styled(FormControl)``;

const BagList = () => {
	const dispatch = useDispatch();
	const list = useSelector(selectBag).bag;
	const handleSizeChange = (e: SelectChangeEvent, idx: number, id: string) => {
		console.log(idx + "" + id + "" + e.target.value);
		dispatch(edit({ idx, id, size: e.target.value }));
	};
	const handleQtyChange = (
		e: SelectChangeEvent<number>,
		idx: number,
		id: string
	) => {
		dispatch(edit({ idx, id, qty: +e.target.value }));
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
										src={`/images/${id}-150w.webp`}
										alt={name}
										fill
										className="img"
										sizes="150px"
										placeholder="blur"
										blurDataURL={`/images/${id}-150w.webp`}
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
											onChange={(e) => handleSizeChange(e, idx, id)}
											size="small"
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
											onChange={(e) => handleQtyChange(e, idx, id)}
										>
											{[...Array(10)].map((_, i) => (
												<MenuItem key={i + 1} value={i + 1}>
													{i + 1}
												</MenuItem>
											))}
										</Select>
									</Qty>
									<IconButton
										sx={{ margin: "0 !important" }}
										onClick={() => dispatch(remove(idx))}
									>
										<DeleteIcon />
									</IconButton>
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
