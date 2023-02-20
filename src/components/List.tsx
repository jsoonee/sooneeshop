import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AppState } from "@/redux/store";
import { fetchAll } from "@/redux/modules/listSlice";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(270px, auto));
	grid-gap: 2rem;
	padding: 0 2rem;
	margin-bottom: 2rem;
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, calc(50% - 0.5rem));
		grid-gap: 1rem;
		padding: 0 1rem;
	}
`;
const Item = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;
const Container = styled.div`
	width: 100%;
	display: inline-block;
	position: relative;
	.img {
		display: block;
		position: relative !important;
		height: unset !important;
	}
`;

const List = () => {
	const products = useSelector((state: AppState) => state.list.filtered);
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
	useEffect(() => {
		console.log("fetching");
		if (!products.length) dispatch(fetchAll());
	}, []);
	console.log(products);
	return (
		<Grid>
			{products.map(({ id, name, price }) => (
				<Link key={id} href={`/products/${name.split(" ").join("-")}/${id}`}>
					<Item>
						<Container>
							<Image
								src={`/images/${id}-600w.webp`}
								alt={name}
								fill
								className="img"
								sizes="50vw"
							/>
						</Container>
						<div>{name}</div>
						<div>₩{(+price).toLocaleString("ko-KR")}</div>
					</Item>
				</Link>
			))}
		</Grid>
	);
};

export default List;
