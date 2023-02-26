import MainImg from "@/components/main/MainImg";
import Products from "@/components/products";
import { filterOn } from "@/redux/modules/listSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(filterOn("all"));
	}, []);
	return (
		<div>
			<MainImg />
			<Products />
		</div>
	);
};

export default Home;
