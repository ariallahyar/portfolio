import React from 'react'
import ProjectCard from './ProjectCard';
import './FeatureProjectCard.css'
import placeholder from '../assets/pizza.png';

const FeatureProject = () => {
	return (
		<div>
			<div className="project-image-group">
				<img src={placeholder} alt="project screenshot" />
				<div className="project-overlay"></div>
				<h2 className="project-overlay-title">Title</h2>
			</div>
			<ProjectCard />
		</div>
	);
};

export default FeatureProject;