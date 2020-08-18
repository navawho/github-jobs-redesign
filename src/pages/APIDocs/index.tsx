import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { Container, Content, Breadcrumbs, Header, Card } from './styles';

import { PageWrapper } from '../styles';

const APIDocs: React.FC = () => {
	const history = useHistory();

	const handleBackClick = (): void => {
		history.push('/');
	};

	return (
		<Container>
			<Content>
				<PageWrapper>
					<Breadcrumbs onClick={handleBackClick}>
						<MdKeyboardBackspace size={30} />
						<p>Voltar ao início</p>
					</Breadcrumbs>
					<Header>
						<h2>The GitHub Jobs API</h2>
					</Header>
					<Card>
						<p>
							The GitHub Jobs API allows you to search, and view jobs with JSON
							over HTTP.
						</p>
						<p>
							To get the JSON representation of any search result or job
							listing, append .json to the URL you&apos;d use on the HTML GitHub
							Jobs site.
						</p>
						<p>
							For example, when searching for Python jobs near New York on the
							site I am taken to this url:
						</p>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://jobs.github.com/positions?description=python&location=new+york"
						>
							https://jobs.github.com/positions?description=python&location=new+york
						</a>
						<p>
							To get the JSON representation of those jobs I just use
							positions.json:
						</p>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://jobs.github.com/positions.json?description=python&location=new+york"
						>
							https://jobs.github.com/positions.json?description=python&location=new+york
						</a>
					</Card>
					<h3>Pagination</h3>
					<Card>
						<p>
							The API also supports pagination. /positions.json, for example,
							will only return 50 positions at a time. You can paginate results
							by adding a page parameter to your queries.
						</p>
						<p>Pagination starts by default at 0.</p>
						<h4>Examples</h4>
						<ul>
							<li>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://jobs.github.com/positions.json?description=ruby&page=1"
								>
									https://jobs.github.com/positions.json?description=ruby&page=1
								</a>
							</li>
							<li>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://jobs.github.com/positions.json?page=1&search=code"
								>
									https://jobs.github.com/positions.json?page=1&search=code
								</a>
							</li>
						</ul>
					</Card>
					<h3>GET /positions.json</h3>
					<Card>
						<p>
							Search for jobs by term, location, full time vs part time, or any
							combination of the three. All parameters are optional.
						</p>
						<h4>Parameters</h4>
						<ul>
							<li>
								<strong>description</strong> — A search term, such as
								&quot;ruby&quot; or &quot;java&quot;. This parameter is aliased
								to <strong>search</strong>.
							</li>
							<li>
								<strong>location</strong> — A city name, zip code, or other
								location search term.
							</li>
							<li>
								<strong>lat</strong> — A specific latitude. If used, you must
								also send long and must <strong className="black">not</strong>{' '}
								send location.
							</li>
							<li>
								<strong>long</strong> — A specific longitude. If used, you must
								also send lat and must <strong className="black">not</strong>{' '}
								send location.
							</li>
							<li>
								<strong>full_time</strong> — If you want to limit results to
								full time positions set this parameter to &apos;true&apos;.
							</li>
						</ul>
						<h4>Examples</h4>
						<ul>
							<li>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://jobs.github.com/positions.json?description=python&full_time=true&location=sf"
								>
									https://jobs.github.com/positions.json?description=python&full_time=true&location=sf
								</a>
							</li>
							<li>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://jobs.github.com/positions.json?search=node"
								>
									https://jobs.github.com/positions.json?search=node
								</a>
							</li>
							<li>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823"
								>
									https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823
								</a>
							</li>
						</ul>
					</Card>
					<h3>GET /positions/ID.json</h3>
					<Card>
						<p>Retrieve the JSON representation of a single job posting.</p>
						<h4>Parameters</h4>
						<ul>
							<li>
								<strong>markdown</strong> — Set to &apos;true&apos; to get the
								description and how_to_apply fields as Markdown.
							</li>
						</ul>
						<h4>Examples</h4>
						<ul>
							<li>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://jobs.github.com/positions/21516.json"
								>
									https://jobs.github.com/positions/21516.json
								</a>
							</li>
							<li>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://jobs.github.com/positions/21516.json?markdown=true"
								>
									https://jobs.github.com/positions/21516.json?markdown=true
								</a>
							</li>
						</ul>
					</Card>
				</PageWrapper>
			</Content>
		</Container>
	);
};

export default APIDocs;
