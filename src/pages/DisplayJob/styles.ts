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
	justify-content: center;
	align-items: center;

	width: 100%;
`;

export const Breadcrumbs = styled.div`
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
	margin-bottom: 32px;

	img {
		cursor: pointer;

		height: 100%;
		width: 100%;

		object-fit: fill;
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
	}

	margin-bottom: 32px;
`;
