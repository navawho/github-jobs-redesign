import React from 'react';

import { Container } from './styles';

interface BackdropProps {
	enabled: boolean;
	click(): void;
}

const Backdrop: React.FC<BackdropProps> = ({ enabled, click }) => (
	<Container enabled={enabled} onClick={click} />
);

export default Backdrop;
