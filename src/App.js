import './App.scss';
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";
import Lesson3 from './pages/Lesson3/Lesson3';
import Header from './components/Header/Header';
import LessonsHeader from './pages/Lessons/components/LessonsHeader/LessonsHeader';
import Dashboard from './pages/Lessons/components/Dashboard/Dashboard';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [newHeader, setNewHeader] = useState(false);

  return (
    <>
      {newHeader ? (<LessonsHeader setNewHeader={setNewHeader} />
      ) : (
        <Header />
      )}
      <main>
        <Routes>
          <Route path='/' element={<Home setNewHeader={setNewHeader} />} />
          <Route path='/home' element={<Navigate to='/' />} />
          <Route path='/lessons' element={<Dashboard />} />
          <Route path="/lessons/3" element={<Lesson3 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
