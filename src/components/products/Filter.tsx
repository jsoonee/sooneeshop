import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/modules/themeSlice";
import { selectList } from "@/redux/modules/listSlice";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Link from "next/link";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
const Icon = styled.div`
	display: flex;
	align-items: center;
	height: 30px;
`;
const Cats = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin-left: 1rem;
	justify-content: center;
	@media screen and (max-width: 480px) {
		margin-left: 0.5rem;
	}
	max-width: 500px;
`;
const Cat = styled.div<{ isActive: boolean; isDark: boolean }>`
	font-size: 1.1rem;
	margin: 0.2rem 0.7rem;
	height: 28px;
	color: ${({ isActive, isDark }) =>
		isActive ? (isDark ? "#ccbbaa" : "#887755") : "inherit"};
	border-bottom: ${({ isActive, isDark }) =>
			isActive ? (isDark ? "#ccbbaa" : "#887755") : "inherit"}
		1px solid;
	cursor: pointer;
	@media screen and (max-width: 480px) {
		margin: 0 0.2rem;
		font-size: 1rem;
	}
`;

export const cats = ["top", "bottom", "outer", "underwear", "footwear", "acc"];

const Filter = () => {
	const [active, setActive] = useState<any>("");
	const { cat } = useSelector(selectList);
	const { isDark } = useSelector(selectTheme);
	useEffect(() => {
		if (cat === "all") {
			setActive("");
		} else {
			setActive(cat);
		}
	}, [cat]);

	const onCatClick = (cat: string) => {
		if (cat === active) {
			setActive("");
		} else {
			setActive(cat);
		}
	};

	return (
		<Wrapper>
			<Icon>
				<FilterAltIcon />
			</Icon>
			<Cats>
				{cats.map((cat, id) => (
					<Cat
						key={id}
						className={cat}
						isActive={cat === active}
						isDark={isDark}
						onClick={() => onCatClick(cat)}
					>
						<Link href={cat === active ? `/` : `/cat/${cat}`} scroll={false}>
							{cat}
						</Link>
					</Cat>
				))}
			</Cats>
		</Wrapper>
	);
};

export default Filter;
