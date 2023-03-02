import MainImg from "@/components/main/MainImg";
import Products from "@/components/products";
import { filterOn, selectList } from "@/redux/modules/listSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
	const dispatch = useDispatch();
	const cat = useSelector(selectList).cat;
	useEffect(() => {
		if (cat !== "all") {
			dispatch(filterOn("all"));
		}
	}, []);
	return (
		<div>
			<MainImg />
			<Products />
		</div>
	);
};

export default Home;
