import styled from 'styled-components';

export const Container = styled.div<{ enabled: boolean }>`
	position: fixed;
	width: 100%;
	height: 100%;
	background: 'transparent';
	cursor: auto;
	top: 0;
	left: 0;
	display: ${({ enabled }) => (enabled ? 'static' : 'none')};
	z-index: 10;
`;
