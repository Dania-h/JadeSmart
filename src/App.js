import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import RoiCalculator from './pages/RoiCalculator/RoiCalculator';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Navigate to='/' />} />
          <Route path='/stocksim' element={<RoiCalculator />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
