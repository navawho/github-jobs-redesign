import styled, { css } from 'styled-components';

interface SearchInputProps {
	isEmpty: boolean;
}

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 100%;
`;

export const SearchBar = styled.div`
	display: flex;
	background: #fff;
	padding: 16px;
	border-radius: 32px;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
	margin: 32px 0;
`;

export const SearchInput = styled.div<SearchInputProps>`
	display: flex;
	align-items: center;

	.close-icon {
		cursor: pointer;

		transition: 0.3s;

		${({ isEmpty }) =>
			isEmpty &&
			css`
				visibility: hidden;
			`}
	}

	input {
		border: 0;
		background: transparent;
		font-size: 18px;
		margin-left: 12px;
	}
`;

export const VerticalLine = styled.div`
	border-left: 2px solid #333333;
	border-radius: 6px;
	margin: 0px 12px;
`;

export const Jobs = styled.div`
	> div {
		margin-bottom: 24px;
	}
`;
