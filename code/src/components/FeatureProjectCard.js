import React from "react";
import "./FeatureProjectCard.css";

const FeatureProject = (props) => {
  return (
    <div>
      <div className="project-image-group">
        <img className="project-image" src={props.project.image} alt="project screenshot" />
        <div className="project-overlay"></div>
        <h2 className="project-overlay-title">{props.project.brief}</h2>
      </div>
      {props.projectCard}
    </div>
  );
};

export default FeatureProject;
