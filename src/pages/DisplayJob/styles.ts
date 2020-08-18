import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
	height: 100vh;

	display: flex;
	align-items: stretch;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 100%;
`;

export const Breadcrumbs = styled.div`
	margin-top: 36px;

	display: flex;
	align-items: center;
	cursor: pointer;

	transition: 0.3s;

	&:hover {
		color: ${shade(0.8, '#333333')};
	}

	p {
		margin-left: 6px;
		font-size: 24px;
		font-weight: 700;
	}

	margin-bottom: 32px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 32px;

	img {
		cursor: pointer;

		height: 100px;
		width: 300px;

		border-radius: 30px;
	}
`;

export const TextBox = styled.div`
	h2 {
		margin-bottom: 12px;
	}

	.text-box {
		background: #fff;
		border-radius: 32px;
		box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
		padding: 24px;

		.markdown {
			color: #333333;
			* {
				margin: 12px 0;
			}

			ul {
				margin-left: 32px;
			}
		}
	}

	margin-bottom: 32px;
`;
