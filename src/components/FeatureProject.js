import React from 'react'
import './FeatureProject.css'
import placeholder from '../assets/pizza.png';

const FeatureProject = () => {
	return (
		<article class="project">
			<div class="project-image-group">
				<img src={placeholder} alt="project screenshot" />
					<div class="project-overlay"></div>
					<h2 class="project-overlay-title">Title</h2>
			</div>
			<div class="project-text-group">
				<h3>Chat bot built in JavaScript</h3>
				<p>Responsive web site using HTML, CSS and JavaScript ES6 for a chat buddy
					conversation.
					<a href="#"><span class="arrow">>></span></a>
				</p>
				<div class="project-tag-group">
					<p>JavaScript</p>
					<p>HTML</p>
					<p>CSS</p>
				</div>
			</div>
		</article>
	);
};

export default FeatureProject;