import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import langs from './langs';

// Layouts
import Home from './layouts/Home';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import About from './layouts/About';
import Project from './layouts/Project';
import Contact from './layouts/Contact';

// styled-components
import { _Container, _Section } from './styled';


const App = () => {
  const [lang, setLang] = useState(langs["pt-br"]);

  return (
    <_Container dplay='flex'>
      <Navbar lang={lang.navbar} setLang={setLang} />
      <_Section>
        <br /><br />
        <Routes>
          <Route path='/' element={
            <Home lang={lang.body.home} />
          } />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </_Section>
    </_Container>
  );
}

export default App;
