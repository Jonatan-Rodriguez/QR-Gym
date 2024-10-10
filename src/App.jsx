import './App.css';
import { Routes, Route } from 'react-router-dom';
//components
import Home from './view/Home/Home';
import ExerciseList from './view/ExerciseList/ExerciseList';

// Datos de ejemplo para las rutinas
const chestExercises1 = [
  { name: 'Press de Banca', series: 4, reps: 10, rest: '90s', img: 'url_de_imagen' },
  { name: 'Aperturas', series: 3, reps: 12, rest: '60s', img: 'url_de_imagen' },
];

const chestExercises2 = [
  { name: 'Press de Banca2', series: 4, reps: 10, rest: '90s', img: 'url_de_imagen' },
  { name: 'Aperturas2', series: 3, reps: 12, rest: '60s', img: 'url_de_imagen' },
];

const chestExercises3 = [
  { name: 'Press de Banca3', series: 4, reps: 10, rest: '90s', img: 'url_de_imagen' },
  { name: 'Aperturas3', series: 3, reps: 12, rest: '60s', img: 'url_de_imagen' },
];

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/rutinaPecho" element={<ExerciseList exercises={chestExercises1} letter='P' title='ECHO-HOMBRO-TRAPECIO'/>} />
        <Route path="/rutinaEspalda" element={<ExerciseList exercises={chestExercises2} letter='E' title='SPLDA-BICEPS-TRICEPS'/>} />
        <Route path="/rutinaPierna" element={<ExerciseList exercises={chestExercises3} letter='C' title='UADRICEPS-FEMORALES-GEMELOS'/>} />
      </Routes>
    </>
  )
}

export default App
