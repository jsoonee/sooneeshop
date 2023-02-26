import { useEffect } from "react";
import { cats } from "@/components/products/Filter";
import MainImg from "@/components/main/MainImg";
import Products from "@/components/products";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useDispatch } from "react-redux";
import { filterOn } from "@/redux/modules/listSlice";

const Cat = ({ cat }: any) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(filterOn(cat));
	}, [cat]);
	console.log(cat);
	return (
		<div>
			<MainImg />
			<Products />
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = cats.map((cat) => ({
		params: { cat: cat },
	}));
	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	console.log(params?.cat);
	return {
		props: {
			cat: params?.cat,
		},
	};
};

export default Cat;
