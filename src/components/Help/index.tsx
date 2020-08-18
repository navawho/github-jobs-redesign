import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Backdrop from '../Backdrop';

import { Container, Menu } from './styles';

const Help: React.FC = () => {
	const history = useHistory();

	const [isOpened, setIsOpened] = useState(false);

	const handleHelperClick = (): void => {
		setIsOpened((prevState) => !prevState);
	};

	const handleBackdropClick = (): void => {
		setIsOpened(false);
	};

	const handleDocsClick = (): void => {
		setIsOpened(false);
		history.push('/api-docs');
	};

	const handleHowItWorksClick = (): void => {
		setIsOpened(false);
		history.push('/how-it-works');
	};

	return (
		<>
			<Container onClick={handleHelperClick} isOpened={isOpened}>
				?
			</Container>
			<Menu isOpened={isOpened}>
				<ul>
					<li>
						<button onClick={handleDocsClick} type="button">
							Documentação da API
						</button>
					</li>
					<li>
						<button onClick={handleHowItWorksClick} type="button">
							Como funciona?
						</button>
					</li>
				</ul>
			</Menu>
			<Backdrop enabled={isOpened} click={handleBackdropClick} />
		</>
	);
};

export default Help;
