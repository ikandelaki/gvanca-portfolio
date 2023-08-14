import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from '../../routes/Home/Home';
import Resume from '../../routes/Resume/Resume';
import Contact from '../../routes/Contact/Contact';
import Projects from '../../routes/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/resume' element={ <Resume /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/projects' element={ <Projects /> } />
      </Routes>
    </div>
  );
}

export default App;
