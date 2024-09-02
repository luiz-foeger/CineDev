import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './paginas/home';
import Filme from './paginas/filme';
import Search from './paginas/filmesAclamados';
import NavRoute from './components/Nav/Nav';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <NavRoute />
      <Routes>
        <Route element={<App />} />
        <Route path='/' element={<Home />} />
        <Route path='/filme/:id' element={<Filme />} />
        <Route path='search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;


