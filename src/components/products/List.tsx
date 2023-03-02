import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AppState } from "@/redux/store";
import { fetchAll } from "@/redux/modules/listSlice";
import Box from "@mui/material/Box";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(270px, 33%));
	grid-gap: 2rem;
	padding: 0 2rem;
	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(2, calc(50% - 0.5rem));
		grid-gap: 1rem;
		padding: 0 1rem;
	}
`;
const ItemWrap = styled.div`
	display: inline-block;
`;
const Item = styled(Box)`
	display: flex;
	flex-direction: column;
	text-align: center;
	:hover {
		.img {
			transform: scale(1.02);
			transition: 0.3s;
		}
	}
`;
const Container = styled.div`
	display: inline-block;
	position: relative;
	.img {
		display: block;
		position: relative !important;
		height: unset !important;
	}
`;
const Name = styled.div`
	margin: 0.5rem 0;
`;
const Price = styled.div`
	letter-spacing: 0.3px;
`;

const List = () => {
	const products = useSelector((state: AppState) => state.list.filtered);
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
	useEffect(() => {
		if (!products.length) dispatch(fetchAll());
	}, []);

	return (
		<Grid>
			{products.map(({ id, name, price }) => (
				<ItemWrap key={id}>
					<Link href={`/products/${name.split(" ").join("-")}/${id}`}>
						<Item>
							<Container>
								<Image
									src={`/images/${id}-360w.webp`}
									alt={name}
									fill
									className="img"
									sizes="50vw"
								/>
							</Container>
							<Name>{name}</Name>
							<Price>₩ {price.toLocaleString("ko-KR")}</Price>
						</Item>
					</Link>
				</ItemWrap>
			))}
		</Grid>
	);
};

export default List;
