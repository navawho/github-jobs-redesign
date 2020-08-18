import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router-dom';

import {
	Container,
	Content,
	Breadcrumbs,
	Header,
	TextBox,
	TextContainer,
	SectionWrapper,
} from './styles';

import { PageWrapper } from '../styles';

const HowItWorks: React.FC = () => {
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
						<h2>Como o Github Job funciona?</h2>
						<p>
							GitHub Jobs is a great place attract the best technical talent for
							your companys open software development positions. Heres how:
						</p>
					</Header>
					<SectionWrapper>
						<TextContainer>
							<TextBox>
								<h2>Crie e visualize sua listagem</h2>
								<div className="text-box">
									<p>
										See exactly how your listing will look before you publish
										live. Before creating a listing, you must login with your
										GitHub account and verify your email address.
									</p>
								</div>
							</TextBox>
							<IconContext.Provider value={{ className: 'foward-icon' }}>
								<MdKeyboardBackspace size={30} />
							</IconContext.Provider>
							<TextBox>
								<h2>Pay with a major credit card</h2>
								<div className="text-box">
									<p>
										Invoicing available on request for bulk orders. Email
										jobs@github.com for more info. Sorry, no recruitment
										agencies.
									</p>
								</div>
							</TextBox>
							<IconContext.Provider value={{ className: 'foward-icon' }}>
								<MdKeyboardBackspace size={30} />
							</IconContext.Provider>
							<TextBox>
								<h2>Your listing goes live immediately</h2>
								<div className="text-box">
									<p>
										Listings are live for 30 days. We’ll send you a receipt and
										a link to change the listing.
									</p>
								</div>
							</TextBox>
						</TextContainer>
						<h3>
							Questions? Submit a request via our contact form and lets talk.
						</h3>
					</SectionWrapper>
				</PageWrapper>
			</Content>
		</Container>
	);
};

export default HowItWorks;
