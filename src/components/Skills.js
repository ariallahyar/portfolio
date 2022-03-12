import React from 'react'
import './Skills.css'

const Skills = () => {
	return (
		<section class="section">
			<div class="container">
				<h2>Skills</h2>
				<div class="skills-container">
					<div class="skills-group">
						<h3>Code</h3>
						<p>HTML/CSS</p>
						<p>JavaScript</p>
						<p>React</p>
						<p>Git</p>
					</div>
					<div class="skills-group">
						<h3>Additional skills</h3>
						<p>Project management</p>
						<p>Stakeholder management</p>
						<p>Communication</p>
						<p>Adaptability</p>
						<p>Collaboration</p>
					</div>
					<div class="skills-group">
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