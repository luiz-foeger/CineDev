import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './paginas/home';
import SecondPage from './paginas/filmesAclamados';
import NavRoute from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NavRoute />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/filmesAclamados' element={<SecondPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


