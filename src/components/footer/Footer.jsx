import React from "react";
import styled from "styled-components";

function Footer() {
	return (
		<StyledDiv>
			<img src="src/assets/img/pexels-alexy-almond-3756523 1.png" alt="Food" />
			<TextOverlay>
				<h1>Delicious food, delivered to you</h1>
				<p>
					Choose your favorite meal from our broad selection of available meals
					and enjoy a delicious lunch or dinner at home.
				</p>
				<p>
					All our meals are cooked with high-quality ingredients, just-in-time
					and of course by experienced chefs!
				</p>
			</TextOverlay>
		</StyledDiv>
	);
}

export default Footer;

const StyledDiv = styled.div`
	width: 100%;
	height: 600px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const TextOverlay = styled.div`
	margin-left: 780px;
  margin-top: -140px;
	transform: translateX(-50%);
	color: white;
	background: rgba(0, 0, 0, 0.7);
	padding: 20px 40px;
	text-align: center;
	border-radius: 10px;
	max-width: 80%;
	box-sizing: border-box;

	h1 {
		margin: 0;
		font-size: 2em;
	}

	p {
		margin: 10px 0;
	}
`;
