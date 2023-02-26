import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Typography from "@mui/material/Typography";

const Wrapper = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100px;
`;

const Icons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	> * {
		padding: 0 2rem;
	}
`;

const Footer = () => {
	return (
		<Wrapper>
			<Icons>
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
			</Icons>
			<Typography
				variant="body1"
				align="center"
				sx={{ fontSize: "0.9rem", color: "action.active" }}
			>
				This website is not real.
			</Typography>
		</Wrapper>
	);
};

export default Footer;
