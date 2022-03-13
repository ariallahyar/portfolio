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
    <body>
      <Header />
      <main>
        <About />
        <Tech />
        <ProjectSection
          featureProjects={getFeatureProjects().map(project => {
            return (
              <FeatureProject
                project={project}
                projectCard={<ProjectCard project={project} />}
              />
            )
          })}

          projects={getProjects().map(project => {
            return (
              <ProjectCard project={project} />
            )
          })}
        />

        <Skills />
      </main>
      <ContactInfo />
    </body>
  );
};

export default App;
