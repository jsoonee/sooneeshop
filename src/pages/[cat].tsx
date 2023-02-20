import { useEffect } from "react";
import { cats } from "@/components/Filter";
import MainImg from "@/components/MainImg";
import Products from "@/components/Products";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useDispatch } from "react-redux";
import { filterOn } from "@/redux/modules/listSlice";

// const Cat = ({ cat }: any) => {
// 	console.log(cat);
// 	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
// 	const products = useSelector(listSelector);
// 	useEffect(() => {
// 		if (!products) dispatch(fetchAll);
// 		dispatch(filterOn(cat));
// 	}, []);
// 	return (
// 		<>
// 			<MainImg />
// 			<Products />
// 		</>
// 	);
// };

const Cat = ({ cat }: any) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(filterOn(cat));
	}, [cat]);
	console.log(cat);
	return (
		<>
			<MainImg />
			<Products />
		</>
	);
};

// export { default } from ".";

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
