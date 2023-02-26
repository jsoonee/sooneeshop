import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectBag } from "@/redux/modules/bagSlice";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import ClickAwayListener from "@mui/material/ClickAwayListener";

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
	const [open, setOpen] = useState<boolean>(false);
	const theme = useTheme();
	const bagList = useSelector(selectBag);
	return bagList.length ? (
		<Link href="/bag">
			<IconButton>
				<BadgeStyle badgeContent={bagList.length} theme={theme}>
					<ShoppingBagOutlinedIcon sx={{ fontSize: 30 }} />
				</BadgeStyle>
			</IconButton>
		</Link>
	) : (
		<ClickAwayListener onClickAway={() => setOpen(false)}>
			<div>
				<Tooltip
					PopperProps={{
						disablePortal: true,
					}}
					onClose={() => setOpen(false)}
					open={open}
					disableFocusListener
					disableHoverListener
					disableTouchListener
					title="Your bag is empty."
				>
					<IconButton onClick={() => setOpen(true)}>
						<ShoppingBagOutlinedIcon sx={{ fontSize: 30 }} />
					</IconButton>
				</Tooltip>
			</div>
		</ClickAwayListener>
	);
};

export default BagIcon;
