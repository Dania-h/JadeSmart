import './App.scss';
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";
import { Routes, Route, Navigate } from 'react-router-dom';
import Lessons from './pages/Lessons/Lessons';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/lessons' element={<Lessons />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
