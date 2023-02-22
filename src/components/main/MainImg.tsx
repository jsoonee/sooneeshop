import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	height: 500px;
	img {
		width: 100%;
		display: block;
		object-fit: cover;
		height: 500px;
	}
	@media screen and (max-width: 720px) {
		height: 300px;
		img {
			height: 300px;
		}
	}
`;

const MainImg = () => {
	return (
		<Wrapper>
			<img
				srcSet="/images/main-720w.webp 720w, /images/main-1200w.webp 1200w"
				alt="main image"
			/>
		</Wrapper>
	);
};

export default MainImg;
