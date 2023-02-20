// import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Bag = () => {
	return (
		<div>
			<IconButton>
				<ShoppingBagOutlinedIcon sx={{ fontSize: 30 }} />
			</IconButton>
		</div>
	);
};

export default Bag;
