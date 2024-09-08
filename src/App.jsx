import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './view/Home/Home';
import ManRutines from './view/ManRoutine/ManRoutines';
import WomenRutines from './view/WomenRoutines/WomenRoutines';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manRutines' element={<ManRutines />} />
        <Route path='/womenRutines' element={<WomenRutines />} />
      </Routes>
    </>
  )
}

export default App
