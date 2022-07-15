import { Routes, Route } from 'react-router-dom'
import usePersistedState from './utils/usePersistedState';
import { useState } from 'react';

// icons
import { AiOutlineMenuUnfold } from 'react-icons/ai'

// Layouts
import Home from './layouts/Home';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import About from './layouts/About';
import Project from './layouts/Project';
import Contact from './layouts/Contact';
import NotFound from './layouts/NotFound'

// styled-components
import { ContainerStyled, SectionStyled, MenuIconStyled } from './styled';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyled } from './styled';

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
  const [menu, setMenu] = useState(false)

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

  function OpenClosedMenu(){
    setMenu(!menu)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <ContainerStyled dplay='flex'>
        <Navbar 
          langParams={lang.navbar}
          lang={lang.title}
          setLang={toggleLang} 
          toggleTheme={toggleTheme} 
          theme={theme.title} 
          menu={menu}
          OpenClosedMenu={OpenClosedMenu}
        />

        <SectionStyled>
          <br />
          <MenuIconStyled onClick={OpenClosedMenu}>
            <AiOutlineMenuUnfold />
          </MenuIconStyled>
          <br />
          <Routes>
            <Route path="*" element={<NotFound title={lang.pags.notFound} />} />
            <Route path='/' element={
              <Home pags={lang.pags} />
            } />
            <Route path='/about' element={<About about={lang.pags.about} tec={lang.pags.tec} />} />
            <Route path='/projects' element={<Project projects={lang.pags.projects}  />} />
            <Route path='/contact' element={<Contact contact={lang.pags.contact} />} />
          </Routes>
          <Footer footer={lang.pags.rights} />
        </SectionStyled>
      </ContainerStyled>
    </ThemeProvider>
  );
}

export default App;
