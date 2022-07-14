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
import { ThemeProvider } from 'styled-components';
import { _Global } from './styled';

// Themes
import Dark from './themes/dark';
import Light from './themes/light';

const App = () => {
  const [lang, setLang] = useState(langs["pt-br"]);
  const [theme, setTheme] = useState(Dark)

  function toggleTheme(){
    setTheme(theme.title == 'light' ? Dark : Light)
  }

  return (
    <ThemeProvider theme={theme}>
      <_Global />
      <_Container dplay='flex'>
        <Navbar lang={lang.navbar} setLang={setLang} toggleTheme={toggleTheme} theme={theme.title} />
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
    </ThemeProvider>
  );
}

export default App;
