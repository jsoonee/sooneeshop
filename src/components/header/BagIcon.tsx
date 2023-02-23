import Link from "next/link";
import { useSelector } from "react-redux";
import { selectBag } from "@/redux/modules/bagSlice";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";

const BadgeStyle = styled(Badge)<{ theme: any }>`
	.MuiBadge-badge {
		background-color: transparent;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -30%);
		padding: 0;
	}
`;

const BagIcon = () => {
	const theme = useTheme();
	const bagList = useSelector(selectBag);

	return (
		<Link href={bagList.length ? `/bag` : ""}>
			<IconButton>
				<BadgeStyle badgeContent={bagList.length || ""} theme={theme}>
					<ShoppingBagOutlinedIcon sx={{ fontSize: 30 }} />
				</BadgeStyle>
			</IconButton>
		</Link>
	);
};

export default BagIcon;
