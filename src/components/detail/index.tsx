import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchDetail } from "@/redux/modules/productSlice";
import { fetchAll } from "@/redux/modules/listSlice";

import Option from "./Option";
import Typography from "@mui/material/Typography";

const Wrapper = styled.div`
	padding: 50px 0;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: row;
	@media screen and (max-width: 768px) {
		padding: 0;
		flex-flow: column;
	}
`;
const ImgBox = styled.div`
	min-width: 600px;
	@media screen and (max-width: 1024px) {
		min-width: 50%;
	}
`;
const ImgWrap = styled.div`
	position: relative;
	.img {
		display: block;
		position: relative !important;
		height: unset !important;
	}
`;
const InfoBox = styled.div`
	display: flex;
	flex-flow: column;
	padding: 0 2rem;
	@media screen and (max-width: 768px) {
		padding: 0 1rem;
	}
`;
const Basic = styled.div`
	@media screen and (max-width: 768px) {
		text-align: center;
		margin-top: 1rem;
	}
`;
const Name = styled.div`
	font-size: 1.8rem;
`;
const Cat = styled(Typography)`
	font-size: 1.2rem;
`;
const Price = styled.div`
	margin: 1rem 0;
	font-size: 1.2rem;
	letter-spacing: 0.5px;
`;
const Desc = styled.div`
	padding: 2rem 0;
`;

const Detail = () => {
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
	const itemList = useSelector((state: AppState) => state.list.all);
	const detailList = useSelector((state: AppState) => state.product.data);
	const router = useRouter();
	const pid = router.query.slug ? router.query.slug[1] : "";
	const itemInfo = itemList.find((item) => item.id === pid);
	const detail = detailList.find((item) => item.id === pid);

	useEffect(() => {
		dispatch(fetchAll());
		dispatch(fetchDetail());
	}, []);

	return (
		<Wrapper>
			{itemInfo && detail && (
				<>
					<ImgBox>
						<ImgWrap>
							<Image
								src={`/images/${itemInfo.id}-600w.webp`}
								alt={itemInfo.name + ""}
								fill
								className="img"
								sizes="600px"
								placeholder="blur"
								blurDataURL={`/images/${itemInfo.id}-600w.webp`}
							/>
						</ImgWrap>
					</ImgBox>
					<InfoBox>
						<Basic>
							<Name>{itemInfo.name}</Name>
							<Cat color="text.secondary">{itemInfo.cat}</Cat>
							<Price>₩ {itemInfo.price.toLocaleString("ko-KR")}</Price>
						</Basic>
						<Option
							item={{
								id: itemInfo.id,
								name: itemInfo.name,
								cat: itemInfo.cat,
								price: itemInfo.price,
								sizes: detail.sizes,
							}}
						/>
						<Desc>{detail.desc}</Desc>
					</InfoBox>
				</>
			)}
		</Wrapper>
	);
};

export default Detail;
