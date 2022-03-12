import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Tech from './components/Tech';
import FeatureProject from './components/FeatureProject';

const App = () => {
  return (
    <body>
      <Header />
      <main>
        <About />
        <Tech />
        <section className='section'>
          <div class="container">
            <h2>Featured Projects</h2>
            <div class="project-group">
              <FeatureProject />
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
