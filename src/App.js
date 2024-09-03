import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './paginas/home';
import PaginaPopulares from './paginas/populares';
import NavRoute from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PaginaRecomendados from './paginas/recomendados';

function App() {
  return (
    <div className="App">
      <Header />
      <NavRoute />
      <Routes>
        <Route path='/populares' element={<PaginaPopulares />} />
        <Route path='/' element={<Home />} />
        <Route path='/recomendados' element={<PaginaRecomendados />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


