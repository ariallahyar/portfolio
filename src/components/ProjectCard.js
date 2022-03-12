import React from 'react'
import './ProjectCard.css'

const ProjectCard = () => {
	return (
		<div className="project-text-group">
			<h3>Chat bot built in JavaScript</h3>
			<p>Responsive web site using HTML, CSS and JavaScript ES6 for a chat buddy
				conversation.
				<a href="#"><span className="arrow">>></span></a>
			</p>
			<div className="project-tag-group">
				<p>JavaScript</p>
				<p>HTML</p>
				<p>CSS</p>
			</div>
		</div>
	);
};

export default ProjectCard;