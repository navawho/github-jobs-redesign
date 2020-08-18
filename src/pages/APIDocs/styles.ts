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

	h3 {
		margin: 12px 0;
	}
`;

export const Breadcrumbs = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	transition: 0.3s;
	margin-top: 32px;

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

export const Card = styled.div`
	background: #fff;
	border-radius: 32px;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
	padding: 24px;

	p {
		margin: 6px 0;
	}

	h4 {
		margin-bottom: 6px;
	}

	ul {
		li {
			margin-bottom: 6px;
			strong {
				color: #1d9a00;

				&.black {
					color: #333333;
				}
			}
		}
	}
`;
