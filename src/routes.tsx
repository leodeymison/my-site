import { Routes, Route } from 'react-router-dom'
import React from 'react';

// Layouts
import Home from './layouts/Home';
import About from './layouts/About';
import Project from './layouts/Project';
import Contact from './layouts/Contact';
import NotFound from './layouts/NotFound';
import Blog from './layouts/Blog';
import Article from './layouts/Blog/article';
import Login from './layouts/Login';
import Resister from './layouts/Login/Resister';
import AdminCategorys from './layouts/Admin/Categorys';
import AdminArticles from './layouts/Admin/Articles';
import AdminUsers from './layouts/Admin/Users';
import AdminCategorysCreate from './layouts/Admin/Categorys/layouts/Create';
import AdminCategorysUpdate from './layouts/Admin/Categorys/layouts/Update';
import AdminArticlesCreate from './layouts/Admin/Articles/layouts/Create';
import AdminArticlesUpdate from './layouts/Admin/Articles/layouts/Update';
import AdminArticlesView from './layouts/Admin/Articles/layouts/View';
import Admin from './layouts/Admin';

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
            <Route path='/projects' element={<Project projects={lang.pags.projects}  />} />
            <Route path='/contact' element={<Contact contact={lang.pags.contact} />} />

            <Route path='/blog' element={<Blog lang={lang.title} />} />
            <Route path='/article/:id' element={<Article />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Resister />} />
            {/* Admin */}
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin-login' element={<Admin />} />

            <Route path='/admin/categorys' element={<AdminCategorys />} />
            <Route path='/admin/categorys-create' element={<AdminCategorysCreate />} />
            <Route path='/admin/categorys-update/:id' element={<AdminCategorysUpdate />} />

            <Route path='/admin/articles' element={<AdminArticles />} />
            <Route path='/admin/articles-create' element={<AdminArticlesCreate />} />
            <Route path='/admin/articles-update/:id' element={<AdminArticlesUpdate />} />
            <Route path='/admin/articles-view/:id' element={<AdminArticlesView />} />

            <Route path='/admin/users' element={<AdminUsers />} />
        </Routes>
    )
}

export default Routers