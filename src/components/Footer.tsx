import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Wrapper = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100px;
	> * {
		padding: 0 2rem;
	}
`;

const Footer = () => {
	return (
		<Wrapper>
			<div>
				<IconButton>
					<FacebookIcon sx={{ fontSize: 48 }} />
				</IconButton>
			</div>
			<div>
				<IconButton>
					<InstagramIcon sx={{ fontSize: 48 }} />
				</IconButton>
			</div>
		</Wrapper>
	);
};

export default Footer;
