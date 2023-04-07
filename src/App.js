import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/shared/Navbar';
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/ContactMe/ContactMe';
import Projects from './pages/Projects/Projects';
import SingleProject from './pages/SingleProject/SingleProject';
import Footer from './components/shared/Footer';


function App() {
  return (

    <div className="App" >
      <Navbar />
      <div className="site-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<SingleProject />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
