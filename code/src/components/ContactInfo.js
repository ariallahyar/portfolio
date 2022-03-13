import React from 'react'
import './ContactInfo.css'

const ContactInfo = () => {
	return (
		<footer>
			<div className="container">
				<div className="contact-text-group">
					<h2>Get in touch</h2>
					<p>Arianna Allahyar</p>
					<div className='contact-links'>
						<a href="mailto:anallahyar@gmail.com">Email</a>
						&nbsp;&nbsp;•&nbsp;&nbsp;
						<a href="https://www.linkedin.com/in/ariannaallahyar/">LinkedIn</a>
						&nbsp;&nbsp;•&nbsp;&nbsp;
						<a href="https://github.com/ariallahyar">GitHub</a>
					</div>
				</div>
			</div>
		</footer >
	);
};

export default ContactInfo;