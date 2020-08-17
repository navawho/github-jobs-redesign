import { useState, useEffect } from 'react';
import axios, { Canceler } from 'axios';
import api from '../services/api';
import JobDTO from '../dtos/job';

const FetchJobs = (
	location: string,
	description: string,
	page: number,
): {
	isLoading: boolean;
	jobs: JobDTO[];
	hasError: boolean;
	hasMore: boolean;
} => {
	const [jobs, setJobs] = useState<JobDTO[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setJobs([]);
	}, [location, description]);

	useEffect(() => {
		setIsLoading(true);
		setHasError(false);
		let cancel: Canceler;
		api
			.get('/positions.json', {
				params: { description, location, page },
				cancelToken: new axios.CancelToken((c) => {
					cancel = c;
				}),
			})
			.then(({ data }) => {
				setJobs((prevData) => [...prevData, ...data]);
				setHasMore(data.length > 0);
				setIsLoading(false);
			})
			.catch((err) => {
				if (axios.isCancel(err)) {
					return;
				}
				setHasError(true);
			});

		return () => cancel();
	}, [description, location, page]);

	return { isLoading, jobs, hasError, hasMore };
};

export default FetchJobs;
