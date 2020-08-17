import React, { useState, useEffect } from 'react';
import { MdSearch, MdLocationOn, MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router-dom';
import { useJob } from '../../hooks/jobContext';

import data from './data';

import api from '../../services/api';

import { Content, SearchBar, SearchInput, VerticalLine, Jobs } from './styles';
import { PageWrapper } from '../styles';

import JobCard from '../../components/JobCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import JobDTO from '../../dtos/job';
import fetchJobs from '../../hooks/fetchJobs';

const Home: React.FC = () => {
	const history = useHistory();
	const { changeJob } = useJob();

	const [description, setDescription] = useState('');
	const [location, setLocation] = useState('');

	const handleJobClick = (job: JobDTO): void => {
		changeJob(job);

		history.push('/job');
	};

	const handleCloseDescriptionClick = (): void => {
		setDescription('');
	};

	const handleCloseLocationClick = (): void => {
		setLocation('');
	};

	const { jobs, isLoading } = fetchJobs(location, description);

	return (
		<PageWrapper>
			<Content>
				<SearchBar>
					<SearchInput isEmpty={description.length === 0}>
						<MdSearch
							color={description.length === 0 ? '#333333' : '#1066E8'}
							size={30}
						/>
						<input
							value={description}
							placeholder="Pesquisar oportunidade"
							onChange={(e) => setDescription(e.target.value)}
						/>
						<IconContext.Provider value={{ className: 'close-icon' }}>
							<MdClose onClick={handleCloseDescriptionClick} />
						</IconContext.Provider>
					</SearchInput>
					<VerticalLine />
					<SearchInput isEmpty={location.length === 0}>
						<MdLocationOn
							color={location.length === 0 ? '#333333' : '#1066E8'}
							size={30}
						/>
						<input
							placeholder="Filtrar localização"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						/>
						<IconContext.Provider value={{ className: 'close-icon' }}>
							<MdClose onClick={handleCloseLocationClick} />
						</IconContext.Provider>
					</SearchInput>
				</SearchBar>
				<Jobs>
					{isLoading ? (
						<LoadingSpinner />
					) : (
						jobs.map((job) => (
							<button
								key={job.id}
								onClick={() => handleJobClick(job)}
								type="button"
							>
								<JobCard
									title={job.title}
									location={job.location}
									work={job.company}
									fullTime={job.type === 'Full Time'}
									createdAt={job.created_at}
								/>
							</button>
						))
					)}
				</Jobs>
			</Content>
		</PageWrapper>
	);
};

export default Home;
