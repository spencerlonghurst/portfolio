import '../styling/App.css';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
