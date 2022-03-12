import React from 'react'
import './Header.css';
import headshot from '../assets/allahyar.jpg';
import linkedin from '../assets/linkedin_white.svg';
import github from '../assets/github_white.svg';

const Header = () => {
	return (
		<header class="header">
			<div class="container header-container">
				<div class="header-socials-groups">
					<a href="https://www.linkedin.com/in/ariannaallahyar/">
						<img class="header-social-icon" src={linkedin} alt="LinkedIn logo"></img>
					</a>
					<a href="https://github.com/ariallahyar">
						<img class="header-social-icon" src={github} alt="GitHub logo"></img>
					</a>
				</div>
				<img class="header-image" src={headshot} alt="headshot of Arianna"></img>
					<div class="header-text-group">
						<p class="header-portfolio">PORTFOLIO: <span class="header-name">ARIANNA ALLAHYAR</span></p>
						<h1>web developer</h1>
						<p class="header-title-extra">with sustainable mobility in focus</p>
					</div>
			</div>
		</header>
	);
}

export default Header;