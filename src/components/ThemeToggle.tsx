import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, toggleTheme } from "@/redux/modules/themeSlice";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { setItem } from "@/utils/localStorage";

const ThemeToggle = () => {
	const { isIdentified, isDark } = useSelector(selectTheme);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isIdentified) {
			const rootTheme = document.documentElement.getAttribute("theme");
			const isRootDark = rootTheme === "dark" ? true : false;
			dispatch(toggleTheme(isRootDark));
		}
	}, []);

	const clickToggle = () => {
		const theme = isDark ? "light" : "dark";
		setItem("theme", theme);
		dispatch(toggleTheme(!isDark));
	};

	return (
		<div onClick={clickToggle}>
			<Tooltip title="Toggle Theme">
				<IconButton>
					{isDark ? (
						<DarkModeIcon sx={{ fontSize: 30 }} />
					) : (
						<LightModeIcon sx={{ fontSize: 30 }} />
					)}
				</IconButton>
			</Tooltip>
		</div>
	);
};

export default ThemeToggle;
