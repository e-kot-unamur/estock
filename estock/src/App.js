import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import NewGame from './pages/NewGame';
import RentPage from './pages/RentPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route end path='/' element={<Home/>}/>
        <Route end path='/rent' element={<RentPage/>}/>
        <Route end path='/newgame' element={<NewGame/>}/>
        <Route end path='/about' element={<About/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;