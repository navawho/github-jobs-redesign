import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { IconContext } from 'react-icons';

import { Container } from './styles';

const JobCard: React.FC = () => {
	const handleClick = (): void => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Container onClick={handleClick}>
			<IconContext.Provider value={{ className: 'up-icon' }}>
				<MdKeyboardArrowUp size={30} />
			</IconContext.Provider>
		</Container>
	);
};

export default JobCard;
