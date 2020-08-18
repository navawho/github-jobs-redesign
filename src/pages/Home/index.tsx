import React, { useState, useRef, useCallback } from 'react';
import { MdSearch, MdLocationOn, MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router-dom';
import { useJob } from '../../hooks/jobContext';

import { Content, SearchBar, SearchInput, VerticalLine, Jobs } from './styles';
import { PageWrapper } from '../styles';

import JobCard from '../../components/JobCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ScrollToTop from '../../components/ScrollToTop';

import JobDTO from '../../dtos/job';
import fetchJobs from '../../hooks/fetchJobs';

const Home: React.FC = () => {
	const history = useHistory();
	const { changeJob } = useJob();

	const observer: any = useRef();

	const [page, setPage] = useState(1);
	const [description, setDescription] = useState('');
	const [location, setLocation] = useState('');

	const { jobs, isLoading, hasError, hasMore } = fetchJobs(
		location,
		description,
		page,
	);

	const lastJobElementRef = useCallback(
		(node) => {
			if (isLoading) {
				return;
			}
			if (observer.current) {
				observer.current.disconnect();
			}
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore && jobs.length > 50) {
					setPage((prevPage) => prevPage + 1);
				}
			});
			if (node) {
				observer.current.observe(node);
			}
		},
		[isLoading, hasMore, jobs],
	);

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

	return (
		<>
			<ScrollToTop />
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
						{!hasError
							? jobs.map((job, index) => {
									if (jobs.length === index + 1) {
										return (
											<button
												key={job.id}
												onClick={() => handleJobClick(job)}
												type="button"
												ref={lastJobElementRef}
											>
												<JobCard
													title={job.title}
													location={job.location}
													work={job.company}
													fullTime={job.type === 'Full Time'}
													createdAt={job.created_at}
												/>
											</button>
										);
									}

									return (
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
									);
							  })
							: 'Ocorreu um erro ao carregar as oportunidades, por favor tente novamente'}
					</Jobs>
					{isLoading && !hasError && <LoadingSpinner />}
				</Content>
			</PageWrapper>
		</>
	);
};

export default Home;
