import React from "react";

const ProjectSection = (props) => {
  return (
    <section className="section">
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="project-group">
          {props.featureProjects.map((project, index) => (
            <article key={index} className="project">
              {project}
            </article>
          ))}
        </div>

        <h2 className="no-fill">Other projects</h2>

        {props.projects.map((project, index) => (
          <article key={index} className="project">
            {project}
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
