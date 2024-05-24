import './App.css';
import { Routes, Route } from 'react-router-dom'
import TicTacToe from './components/TicTacToe/TicTacToe';
import Navbar from './components/Navbar';
import AutoComplete from './components/AutoComplete';
import ImageSlider from './components/ImageSlider';
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<TicTacToe />} />
        <Route path='accordion' element={<Accordion />} />
        <Route path='autocomplete' element={<AutoComplete />} />
        <Route path='imageSlider' element={<ImageSlider />} />
        <Route path='/tictactoe' element={<TicTacToe />} /> 
      </Routes>
    </div>
  );
}

export default App;
