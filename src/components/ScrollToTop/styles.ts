import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
	box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
	background: #fff;
	border-radius: 50%;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 50px;
	height: 50px;

	position: fixed;
	bottom: 32px;
	left: 32px;

	transition: 0.3s;

	cursor: pointer;

	.up-icon {
		transition: 0.3s;
		color: #333333;
	}

	&:hover {
		background: ${shade(0.2, '#fff')};
		color: red;

		.up-icon {
			color: ${shade(0.8, '#333333')};
		}
	}
`;
