import { Routes, Route } from 'react-router-dom'
import usePersistedState from './utils/usePersistedState';

// Layouts
import Home from './layouts/Home';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import About from './layouts/About';
import Project from './layouts/Project';
import Contact from './layouts/Contact';
import NotFound from './layouts/NotFound'

// styled-components
import { _Container, _Section } from './styled';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { _Global } from './styled';

// Themes
import Dark from './themes/dark';
import Light from './themes/light';

// Langs
import EN from './langs/en';
import PTBR from './langs/pt-br';
import { LangsType } from './langs/types';

const App = () => {
  const [lang, setLang] = usePersistedState<LangsType>('lang', PTBR);
  const [theme, setTheme] = usePersistedState<DefaultTheme>('thema', Dark)

  function toggleLang(lang:string){
    if(lang === "pt-br"){
      setLang(PTBR)
    }
    if(lang === "en"){
      setLang(EN)
    }
    else {
      setLang(PTBR)
    }
  }

  function toggleTheme(){
    setTheme(theme.title === 'light' ? Dark : Light)
  }

  return (
    <ThemeProvider theme={theme}>
      <_Global />
      <_Container dplay='flex'>
        <Navbar 
          langParams={lang.navbar}
          lang={lang.title}
          setLang={toggleLang} 
          toggleTheme={toggleTheme} 
          theme={theme.title} 
        />

        <_Section>
          <br /><br />
          <Routes>
            <Route path="*" element={<NotFound title={lang.pags.notFound} />} />
            <Route path='/' element={
              <Home pags={lang.pags} />
            } />
            <Route path='/about' element={<About about={lang.pags.about} tec={lang.pags.tec} />} />
            <Route path='/projects' element={<Project projects={lang.pags.projects}  />} />
            <Route path='/contact' element={<Contact contact={lang.pags.contact} />} />
          </Routes>
          <Footer />
        </_Section>
      </_Container>
    </ThemeProvider>
  );
}

export default App;
