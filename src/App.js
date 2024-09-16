import { Route, Routes } from 'react-router-dom'; // import dos componentes da biblioteca de rotas 

import Header from './components/Header/Header'; // import dos componentes utilizados
import NavRoute from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import Home from './paginas/home'; // import das páginas utilizadas
import PaginaPopulares from './paginas/populares';
import PaginaRecomendados from './paginas/recomendados';
import PaginaDetalhes from './paginas/detalhes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavRoute />
      <Routes>
        <Route path='/populares' element={<PaginaPopulares />} />
        <Route path='/' element={<Home />} />
        <Route path='/recomendados' element={<PaginaRecomendados />} />
        <Route path="/detalhes/:id" element={<PaginaDetalhes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;