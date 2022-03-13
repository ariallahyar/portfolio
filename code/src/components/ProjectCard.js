import React from 'react'
import './ProjectCard.css'

const ProjectCard = (props) => {
	return (
		<div className="project-text-group">
			<h3>{props.project.title}</h3>
			<p>{props.project.description}&nbsp;
				<a href={props.project.github}><span className="arrow">>></span></a>
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