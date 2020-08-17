import { useState, useEffect } from 'react';
import axios, { Canceler } from 'axios';
import api from '../services/api';
import JobDTO from '../dtos/job';

const FetchJobs = (
	location: string,
	description: string,
): {
	isLoading: boolean;
	jobs: JobDTO[];
} => {
	const [jobs, setJobs] = useState<JobDTO[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		let cancel: Canceler;
		api
			.get('/positions.json', {
				params: { description, location },
				cancelToken: new axios.CancelToken((c) => {
					cancel = c;
				}),
			})
			.then(({ data }) => {
				setJobs(data);
				setIsLoading(false);
			})
			.catch((err) => {
				if (axios.isCancel(err)) {
					return;
				}
			});

		return () => cancel();
	}, [description, location]);

	return { isLoading, jobs };
};

export default FetchJobs;
