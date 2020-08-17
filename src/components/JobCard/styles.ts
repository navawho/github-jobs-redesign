import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
	hover: boolean;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #fff;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
	padding: 16px 32px;
	border-radius: 42px;

	transition: 0.3s;

	${({ hover }) =>
		hover &&
		css`
			&:hover {
				background: ${shade(0.1, '#fff')};
				cursor: pointer;
			}
		`}

	.description-wrapper {
		display: flex;
		flex-direction: column;
		margin-right: 32px;

		h2 {
			margin-bottom: 2px;
			max-width: 500px;
			text-align: start;
		}

		.info-wrapper {
			display: flex;

			.icon-wrapper {
				display: flex;
				margin-right: 12px;
				align-items: center;

				h6 {
					font-weight: 500;
					margin-left: 3px;
				}
			}
		}
	}

	> h5 {
		color: rgba(51, 51, 51, 0.6);
	}
`;
