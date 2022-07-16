import { Routes, Route } from 'react-router-dom'
import React from 'react';

// Layouts
import Home from './layouts/Home';
import About from './layouts/About';
import Project from './layouts/Project';
import Contact from './layouts/Contact';
import NotFound from './layouts/NotFound';
import Blog from './layouts/Blog';

// interfaces
import { LangsType } from './langs/types';

type RoutersType = {
    lang: LangsType
}

const Routers:React.FC<RoutersType> = ({ lang }) => {
    return (
        <Routes>
            <Route path="*" element={<NotFound title={lang.pags.notFound} />} />
            <Route path='/' element={
              <Home pags={lang.pags} />
            } />
            <Route path='/about' element={<About about={lang.pags.about} tec={lang.pags.tec} />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/projects' element={<Project projects={lang.pags.projects}  />} />
            <Route path='/contact' element={<Contact contact={lang.pags.contact} />} />
        </Routes>
    )
}

export default Routers