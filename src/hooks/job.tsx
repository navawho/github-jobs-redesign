import React, {
	createContext,
	useCallback,
	useContext,
	useState,
	useEffect,
} from 'react';

import JobDTO from '../dtos/job';

interface JobContextData {
	changeJob(job: JobDTO): void;
	selectedJob: JobDTO;
}

const JobContext = createContext<JobContextData>({} as JobContextData);

const JobProvider: React.FC = ({ children }) => {
	const [selectedJob, setSelectedJob] = useState({} as JobDTO);

	useEffect(() => {
		const jobLocal = localStorage.getItem('@GithubJobs:job');

		if (jobLocal) {
			setSelectedJob(JSON.parse(jobLocal));
		}
	}, [selectedJob]);

	const changeJob = useCallback((job: JobDTO): void => {
		localStorage.setItem('@GithubJobs:job', JSON.stringify(job));

		setSelectedJob(job);
	}, []);

	return (
		<JobContext.Provider value={{ changeJob, selectedJob }}>
			{children}
		</JobContext.Provider>
	);
};

const useJob = (): JobContextData => {
	const context = useContext(JobContext);

	return context;
};

export { JobProvider, useJob };
