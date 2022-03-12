import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import About from './components/About';

const App = () => {
  return (
    <body>
      <Header />
      <main>
        <About />
      </main>
    </body>
  );
}

export default App;
