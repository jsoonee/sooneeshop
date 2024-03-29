import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, toggleTheme } from "@/redux/modules/themeSlice";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { setItem } from "@/utils/localStorage";

const ThemeToggle = () => {
	const { isDark } = useSelector(selectTheme);
	const dispatch = useDispatch();

	const clickToggle = () => {
		const theme = isDark ? "light" : "dark";
		document.documentElement.setAttribute("theme", theme);
		setItem("theme", theme);
		dispatch(toggleTheme(!isDark));
	};

	return (
		<Tooltip title="Toggle Theme">
			<IconButton onClick={clickToggle}>
				{isDark ? (
					<DarkModeIcon sx={{ fontSize: 30 }} />
				) : (
					<LightModeIcon sx={{ fontSize: 30 }} />
				)}
			</IconButton>
		</Tooltip>
	);
};

export default ThemeToggle;
