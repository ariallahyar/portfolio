import React from 'react'
import './Skills.css'

const Skills = () => {
	return (
		<section className="section">
			<div className="container">
				<h2>Skills</h2>
				<div className="skills-container">
					<div className="skills-group">
						<h3>Code</h3>
						<p>HTML/CSS</p>
						<p>JavaScript</p>
						<p>React</p>
						<p>Git</p>
					</div>
					<div className="skills-group">
						<h3>Additional skills</h3>
						<p>Project management</p>
						<p>Stakeholder management</p>
						<p>Communication</p>
						<p>Adaptability</p>
						<p>Collaboration</p>
					</div>
					<div className="skills-group">
						<h3>Want to learn</h3>
						<p>TypeScript</p>
						<p>Unit testing</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;