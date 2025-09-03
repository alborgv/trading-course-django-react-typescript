import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Course from './pages/Course';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/course' element={<Course/>}/>
        </Routes>
      </BrowserRouter>          
    </>
  )
}

export default App
