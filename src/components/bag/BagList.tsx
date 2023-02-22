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

const ImageContainer = styled.div`
	display: flex;
	width: 150px;
	height: 150px;
	.img {
		display: block;
		position: relative !important;
		height: unset !important;
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
		<List>
			{list.map(({ id, name, cat, price, sizes, size, qty }, idx) => (
				<div key={idx}>
					<ListItem>
						<ImageContainer>
							<Image
								src={`/images/${id}-600w.webp`}
								alt={name}
								fill
								className="img"
							/>
						</ImageContainer>
						<div>
							<div>{name}</div>
							<div>{cat}</div>
							<FormControl>
								<InputLabel>Size</InputLabel>
								<Select
									value={size}
									label="Size"
									onChange={(e) => handleSizeChange(e, idx)}
								>
									{sizes.map((val, idx) => (
										<MenuItem key={idx} value={val}>
											{val}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<FormControl>
								<InputLabel>Qty</InputLabel>
								<Select
									value={qty}
									label="Qty"
									onChange={(e) => handleQtyChange(e, idx)}
								>
									{[...Array(10)].map((_, i) => (
										<MenuItem key={i + 1} value={i + 1}>
											{i + 1}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</div>
						<div>₩{(+price * +qty).toLocaleString("ko-KR")}</div>
					</ListItem>
					{idx === list.length - 1 || (
						<Divider variant="middle" component="li" />
					)}
				</div>
			))}
		</List>
	);
};

export default BagList;
