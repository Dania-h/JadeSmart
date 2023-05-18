import './App.scss';
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";
import Lesson3 from './pages/Lesson3/Lesson3';
import Header from './components/Header/Header';
import LessonsHeader from './pages/Lessons/components/LessonsHeader/LessonsHeader';
import Dashboard from './pages/Lessons/components/Dashboard/Dashboard';
import Lesson3Quiz from './pages/Lesson3/Lesson3Quiz';
import Lesson2 from './pages/Lesson2/Lesson2';
import Lesson1 from './pages/Lesson1/Lesson1';
import Lesson4 from './pages/Lesson4/Lesson4';
import Lesson4Quiz from './pages/Lesson4/Lesson4Quiz';
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
          <Route path='/lessons/1' element={<Lesson1 />} />
          <Route path='/lessons/2' element={<Lesson2 />} />
          <Route path="/lessons/3" element={<Lesson3 />} />
          <Route path='/lessons/3/quiz' element={<Lesson3Quiz />} />
          <Route path='/lessons/4' element={<Lesson4 />} />
          <Route path='/lessons/4/quiz' element={<Lesson4Quiz />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
