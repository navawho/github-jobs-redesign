import React, { createContext, useCallback, useContext, useState } from 'react';

import JobDTO from '../dtos/job';

interface JobContextData {
	changeJob(job: JobDTO): void;
	getJob(): JobDTO;
}

const JobContext = createContext<JobContextData>({} as JobContextData);

const JobProvider: React.FC = ({ children }) => {
	const [selectedJob, setSelectedJob] = useState({} as JobDTO);

	const getJob = useCallback((): JobDTO => {
		const jobLocal = localStorage.getItem('@GithubJobs:job');

		if (jobLocal) {
			return JSON.parse(jobLocal);
		}

		return selectedJob;
	}, [selectedJob]);

	const changeJob = useCallback((job: JobDTO): void => {
		localStorage.setItem('@GithubJobs:job', JSON.stringify(job));

		setSelectedJob(job);
	}, []);

	return (
		<JobContext.Provider value={{ changeJob, getJob }}>
			{children}
		</JobContext.Provider>
	);
};

const useJob = (): JobContextData => {
	const context = useContext(JobContext);

	return context;
};

export { JobProvider, useJob };
