import Header from './components/Header';
import About from './components/About';
import Tech from './components/Tech';
import FeatureProject from './components/FeatureProjectCard';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import ContactInfo from './components/ContactInfo';
import ProjectSection from './components/ProjectSection';

import { getFeatureProjects, getProjects } from './projectData'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Tech />
        <ProjectSection
          featureProjects={getFeatureProjects().map((project, index) => {
            return (
              <FeatureProject
                key={index}
                project={project}
                projectCard={<ProjectCard project={project} />}
              />
            )
          })}

          projects={getProjects().map((project, index) => {
            return (
              <ProjectCard
                key={index}
                project={project} />
            )
          })}
        />
        <Skills />
      </main>
      <ContactInfo />
    </div>
  );
};

export default App;
