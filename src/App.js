import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// importa los elementes que corresponden a tus rutas
import Inicio from './compo/inicio.js';
import Exposiciones from './compo/exposiciones.js';
import Blog from './compo/blog.js';
import Galeria from './compo/galeria.js';
import Fin from './compo/fin.js'
import './App.css'

function Menu() {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/exposiciones'>Exposiciones</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/galeria'>Galería</Link>
        </li>
      </ul>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/exposiciones' element={<Exposiciones />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/galeria' element={<Galeria />} />
        </Routes>
        <Fin />
      </div>
    </BrowserRouter>
  );
}

export default App;
