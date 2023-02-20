import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchDetail, getDetail } from "@/redux/modules/productSlice";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
`;
const ImgBox = styled.div`
	max-width: 600px;
	.img {
		display: block;
		position: relative !important;
		height: unset !important;
	}
`;
const Description = styled.div``;

const Detail = ({ pid }: { pid: string }) => {
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
	const detail = useSelector((state: AppState) =>
		state.product.detail ? state.product.detail : undefined
	);
	const router = useRouter();
	const { id, name, price } = router.query;
	console.log(router);

	useEffect(() => {
		dispatch(fetchDetail());
		dispatch(getDetail(pid));
	}, []);
	console.log(detail);
	return (
		<Wrapper>
			<ImgBox>
				{/* <Image
					src={`/images/${id}-600w.webp`}
					alt={name + ""}
					fill
					className="img"
				/> */}
			</ImgBox>
			<Description>
				{detail && detail.desc}
				{/* <Typography variant="h4">{name}</Typography> */}
			</Description>
		</Wrapper>
	);
};

export default Detail;
