import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Tech from './components/Tech';

const App = () => {
  return (
    <body>
      <Header />
      <main>
        <About />
        <Tech />
      </main>
    </body>
  );
}

export default App;
