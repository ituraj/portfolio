import React, { Component } from 'react';
import { ReactComponent as MaxIcon } from '../../assets/icons/max.svg';
import { withTranslation } from 'react-i18next';
import portfolioImageThree from '../../assets/images/image3.png';
import resume from '../../assets/documents/resume.pdf';

class Footer extends Component {
	render() {
		return (
			<>
				<footer id='contact' className='footer'>
					<figure className='figure'>
						<img src={portfolioImageThree} alt='test' />
					</figure>
					<article className='article'>
						<h2>{this.props.t('contact.heading')}</h2>
						<MaxIcon className='secondary underscore' />
						<p>{this.props.t('contact.article')}</p>
						<section className='links'>
							<a
								href='https://github.com/ituraj'
								target='_blank'
								rel='noopener noreferrer'
								className='btn-social'
							>
								Github
							</a>
							<a
								href={resume}
								target='_blank'
								rel='noopener noreferrer'
								className='btn-social'
							>
								Resume
							</a>
						</section>
					</article>
				</footer>
			</>
		);
	}
}

export default withTranslation('common')(Footer);
