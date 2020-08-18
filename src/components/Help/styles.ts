import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div<{ isOpened: boolean }>`
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
	right: 32px;

	font-size: 24px;

	transition: 0.3s;

	cursor: pointer;

	z-index: 11;

	&:hover {
		background: ${shade(0.2, '#fff')};
		color: ${shade(0.8, '#333333')};
	}

	${({ isOpened }) =>
		isOpened &&
		css`
			background: ${shade(0.2, '#fff')};
			color: ${shade(0.8, '#333333')};
		`}
`;

export const Menu = styled.div<{ isOpened: boolean }>`
	background: #fff;
	z-index: 11;

	display: flex;
	flex-direction: column;

	position: fixed;
	bottom: 94px;
	right: 32px;

	border-radius: 16px;

	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);

	ul {
		padding: 16px;

		li {
			list-style: none;
			margin-bottom: 6px;

			:last-child {
				margin: 0;
			}

			button {
				background: transparent;
				border: 0;

				font-size: 18px;
				color: #333333;
				font-weight: 500;
				font-family: 'Roboto', sans-serif;

				transition: 0.3s;

				cursor: pointer;

				&:hover {
					color: ${shade(1, '#333333')};
				}
			}
		}
	}

	${({ isOpened }) =>
		!isOpened &&
		css`
			display: none;
		`}
`;
