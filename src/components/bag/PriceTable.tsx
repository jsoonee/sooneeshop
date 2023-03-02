import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectBag } from "@/redux/modules/bagSlice";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
`;
const AccordionStyle = styled(Accordion)``;
const AccordionSummaryStyle = styled(AccordionSummary)`
	padding: 0.5rem 2rem;
`;
const AccordionDetailsStyle = styled(AccordionDetails)`
	padding: 0.5rem 1.5rem;
`;
const AlertWrap = styled.div`
	display: flex;
	justify-content: center;
`;
const FormWrap = styled.div`
	display: flex;
	align-items: center;
`;
const PriceList = styled.div`
	margin: 1rem 0;
`;
const Price = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.5rem 0;
`;
const Total = styled(Price)`
	font-size: 1.2rem;
	font-weight: bold;
`;

interface IPromo {
	code: string;
	discount: number;
}
const genuineCode: IPromo[] = [{ code: "3moonsrise", discount: 0.3 }];

const PriceTable = () => {
	const [codes, setCodes] = useState<string>("");
	const [error, setError] = useState<boolean>(false);
	const [applied, setApplied] = useState<IPromo | null>(null);
	const bag = useSelector(selectBag).bag;
	const subtotal = bag.reduce((acc, { price, qty }) => acc + +price * qty, 0);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(codes);
		const accord = genuineCode.find((v) => v.code === codes);
		if (accord) {
			setError(false);
			setApplied(accord);
		} else {
			setError(true);
		}
	};

	return (
		<div>
			{applied ? (
				<AlertWrap>
					<Alert sx={{ display: "inline-flex", padding: "0.5rem 1rem" }}>
						Promo code has been applied.
					</Alert>
				</AlertWrap>
			) : (
				<AccordionStyle disableGutters={true}>
					<AccordionSummaryStyle expandIcon={<ExpandMoreIcon />}>
						Do you have a promo code?
					</AccordionSummaryStyle>
					<AccordionDetailsStyle>
						<FormControl>
							<form onSubmit={handleSubmit}>
								<FormWrap>
									<TextField
										size="small"
										error={error}
										onChange={(e) => {
											setCodes(e.target.value);
											setError(false);
										}}
									/>
									<Button
										type="submit"
										variant="contained"
										disabled={!codes}
										sx={{ margin: "0 0.5rem" }}
									>
										Apply
									</Button>
								</FormWrap>
								<FormHelperText error={error}>
									{error ? "This is not a vaild promo code." : " "}
								</FormHelperText>
							</form>
						</FormControl>
					</AccordionDetailsStyle>
				</AccordionStyle>
			)}
			<PriceList>
				<Price>
					<div>Subtotal</div>
					<div>₩ {subtotal.toLocaleString("ko-KR")}</div>
				</Price>
				{applied && (
					<Price>
						<div>Discounts</div>
						<div>
							- ₩ {(subtotal * applied.discount).toLocaleString("ko-KR")}
						</div>
					</Price>
				)}
				<Divider />
				<Total>
					<div>Total</div>
					<div>
						₩{" "}
						{(applied
							? subtotal * (1 - applied.discount)
							: subtotal
						).toLocaleString("ko-KR")}
					</div>
				</Total>
			</PriceList>
		</div>
	);
};

export default PriceTable;
