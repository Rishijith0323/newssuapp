import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Viewsub from './components/Viewsub';
import Search from './components/Search';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/search" element={<Search />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/viewsub" element={<Viewsub />} />
          
      </Routes>
   </BrowserRouter >
  );
}

export default App;
