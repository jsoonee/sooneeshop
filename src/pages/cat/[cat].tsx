import { useEffect } from "react";
import { cats } from "@/components/products/Filter";
import MainImg from "@/components/main/MainImg";
import Products from "@/components/products";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useSelector, useDispatch } from "react-redux";
import { filterOn, selectList } from "@/redux/modules/listSlice";

const Cat = ({ cat }: any) => {
	const puppy = useSelector(selectList).cat;
	const dispatch = useDispatch();
	useEffect(() => {
		if (cat !== puppy) {
			dispatch(filterOn(cat));
			// console.log("중복제거");
		}
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
