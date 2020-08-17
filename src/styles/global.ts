import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body {
		background: #E7E7E7;
		color: #333333;
		-webkit-font-smoothing: antialiased;
	}

	input, p {
		font-family: 'Roboto', sans-serif;
	}

	input {
		&::placeholder {
			color: rgba(51, 51, 51, 0.8);
		}
	}

	h1, h2, h3, h4, h5, h6, button {
		font-family: 'Inter', sans-serif;
		font-weight: 700;
	}

	button {
		cursor: pointer;
	}
`;
