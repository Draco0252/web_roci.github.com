import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// importa los componentes que corresponden a tus rutas
import Inicio from './compo/inicio.js';
import Exposiciones from './compo/exposiciones.js';
import Blog from './compo/blog.js';
import Galeria from './compo/galeria.js';

function Menu() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/exposiciones">Exposiciones</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/galeria">Galería</Link>
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
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/exposiciones" component={Exposiciones} />
          <Route path="/blog" component={Blog} />
          <Route path="/galeria" component={Galeria} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
