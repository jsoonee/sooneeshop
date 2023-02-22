import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { add, selectBag } from "@/redux/modules/bagSlice";
import { useTheme } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Wrapper = styled.div`
	margin-top: 2rem;
`;
const RadioWrap = styled.div<{ error: boolean; theme: any }>`
	padding: 0 1rem;
	border: 1px solid;
	border-color: ${({ error, theme }) =>
		error ? theme.palette.error.main : "transparent"};
	border-radius: 15px;
	margin: 0.5rem 0;
`;
const SizeLabel = styled(FormLabel)`
	padding: 0 1rem;
`;
const BtnStyle = styled(Button)`
	margin: 1rem;
	padding: 1rem;
	border-radius: 30px;
`;
const AlertWrap = styled.div`
	width: 100%;
	position: fixed;
	top: 80px;
	display: flex;
	justify-content: center;
`;

interface IOption {
	id: string;
	name: string;
	cat: string;
	price: string;
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
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (error) setOpen(false);
		setSize(e.target.value);
		setError(false);
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
			<FormControl sx={{ width: "100%" }} onChange={handleOnChange}>
				<SizeLabel
					sx={{
						color: error
							? theme.palette.error.main
							: size
							? theme.palette.primary.main
							: "unset",
					}}
				>
					Select Size
				</SizeLabel>
				<RadioWrap error={error} theme={theme}>
					<RadioGroup name="size">
						{sizes.map((value, idx) => (
							<FormControlLabel
								key={idx}
								value={value}
								control={<Radio />}
								label={value}
							/>
						))}
					</RadioGroup>
				</RadioWrap>
				<BtnStyle
					variant="contained"
					startIcon={<AddCircleOutlineOutlinedIcon />}
					onClick={handleBtnClick}
				>
					ADD TO BAG
				</BtnStyle>
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
			</FormControl>
		</Wrapper>
	);
};

export default Option;
