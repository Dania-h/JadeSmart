import './App.scss';
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";
import { Routes, Route, Navigate } from 'react-router-dom';
import RoiCalculator from './pages/RoiCalculator/RoiCalculator';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/stocksim' element={<RoiCalculator />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
