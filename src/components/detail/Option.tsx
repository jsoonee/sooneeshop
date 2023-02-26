import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { add, selectBag } from "@/redux/modules/bagSlice";
import { useTheme } from "@mui/material/styles";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Wrapper = styled.div`
	margin-top: 2rem;
`;
const SizeLabel = styled(FormLabel)`
	padding: 0 1rem;
`;
const SizeGrid = styled.div<{ error: boolean; theme: any }>`
	padding: 1rem;
	margin: 0.5rem 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 7px;
	border: 2px solid;
	border-radius: 15px;
	border-color: ${({ error, theme }) =>
		error ? theme.palette.error.main : "transparent"};
`;
const SizeBtn = styled(Button)`
	text-transform: none;
`;
const AddBtn = styled(Button)`
	margin: 1rem;
	padding: 1rem;
	border-radius: 30px;
	width: calc(100% - 2rem);
`;
const AlertWrap = styled.div`
	width: 100%;
	position: fixed;
	top: 75px;
	left: 0;
	display: flex;
	justify-content: center;
`;

interface IOption {
	id: string;
	name: string;
	cat: string;
	price: number;
	sizes: string[];
}

const Option = ({ item }: { item: IOption }) => {
	const { id, name, cat, price, sizes } = item;
	const [size, setSize] = useState<string>("");
	const [open, setOpen] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");
	const dispatch = useDispatch();
	const bagList = useSelector(selectBag);
	const theme = useTheme();

	const handleSizeClick = (value: string) => {
		if (value !== size) {
			setOpen(false);
			setSize(value);
			setError(false);
		}
	};

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === "clickaway") return;
		setOpen(false);
	};

	const handleBtnClick = () => {
		setOpen(false);
		if (size) {
			let qty = 0;
			const exist = bagList.find(
				(item) => item.id === id && item.size === size
			);
			if (exist) qty = exist.qty;
			if (qty >= 10) {
				setError(true);
				setMessage("Up to 10 of the same options can be added.");
			} else {
				dispatch(
					add({
						id: id,
						name: name,
						cat: cat,
						price: price,
						sizes: sizes,
						size: size,
					})
				);
				setMessage("Product successfully added to your bag.");
			}
			setOpen(true);
		} else {
			setError(true);
			setOpen(true);
			setMessage("Please select a size.");
		}
	};

	return (
		<Wrapper>
			<SizeLabel error={error}>Select Size</SizeLabel>
			<SizeGrid error={error} theme={theme}>
				{sizes.map((value, idx) => (
					<SizeBtn
						key={idx}
						variant="outlined"
						size="large"
						color="basic"
						sx={{
							borderColor: value === size ? "text.primary" : "divider",
						}}
						onClick={() => handleSizeClick(value)}
					>
						{value}
					</SizeBtn>
				))}
			</SizeGrid>
			<AddBtn
				variant="contained"
				startIcon={<AddCircleOutlineIcon />}
				onClick={handleBtnClick}
			>
				ADD TO BAG
			</AddBtn>
			<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
				<AlertWrap>
					<Alert
						severity={error ? "error" : "success"}
						onClose={handleClose}
						sx={{ border: "1px solid " + theme.palette.divider }}
					>
						{message}
					</Alert>
				</AlertWrap>
			</Snackbar>
		</Wrapper>
	);
};

export default Option;
