import React from 'react';
import { MdLocationOn, MdWork, MdAccessTime } from 'react-icons/md';
import { Container } from './styles';

import formatDate from '../../utils/formatDate';

interface JobCardProps {
	title: string;
	location: string;
	work: string;
	fullTime: boolean;
	hover?: boolean;
	createdAt: string;
}

const JobCard: React.FC<JobCardProps> = ({
	title,
	location,
	work,
	fullTime,
	hover = true,
	createdAt,
}) => {
	return (
		<Container hover={hover}>
			<div className="description-wrapper">
				<h2>{title}</h2>
				<div className="info-wrapper">
					<div className="icon-wrapper">
						<MdLocationOn />
						<h6>{location}</h6>
					</div>
					<div className="icon-wrapper">
						<MdWork />
						<h6>{work}</h6>
					</div>
					{fullTime && (
						<div className="icon-wrapper">
							<MdAccessTime />
							<h6>Full Time</h6>
						</div>
					)}
				</div>
			</div>
			<h5>{formatDate(createdAt)}</h5>
		</Container>
	);
};

export default JobCard;
