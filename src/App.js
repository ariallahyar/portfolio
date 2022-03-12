import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Tech from './components/Tech';
import FeatureProject from './components/FeatureProjectCard';
import ProjectCard from './components/ProjectCard';

const App = () => {
  return (
    <body>
      <Header />
      <main>
        <About />
        <Tech />
        <section className='section'>
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="project-group">
              <article className="project">
                <FeatureProject />
              </article>
              <article className="project">
                <FeatureProject />
              </article>
            </div>
            <h2 className="no-fill">Other projects</h2>
            <article className="project">
              <ProjectCard />
            </article>
            <article className="project">
              <ProjectCard />
            </article>
          </div>
        </section>
      </main>
    </body>
  );
};

export default App;
