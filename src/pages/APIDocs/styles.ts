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
	flex-direction: column;
	margin-bottom: 18px;

	p {
		margin-top: 6px;
		font-weight: 500;
		max-width: 600px;
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
		width: 300px;
		height: 150px;
		display: flex;
		align-items: center;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	align-items: center;

	.foward-icon {
		transform: rotate(180deg);
		margin-right: 24px;
	}
`;

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	h3 {
		align-self: center;
		margin-top: 36px;
	}
`;
