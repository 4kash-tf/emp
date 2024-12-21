import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Add from './components/Add';

import View from './components/View';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/add" element={<Add />} />
        
        <Route path="/View" element={<View />} />
        
        
       
      </Routes>
    </>
  );
}

export default App;
