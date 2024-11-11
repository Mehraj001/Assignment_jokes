
import './App.css';
import Navbar from './compomts/Navbar';
 import SavedJokes from './compomts/SavedJokes';
import Search from './compomts/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
     <BrowserRouter>
     <Navbar/>
     <Routes>
         <Route path='/search' element={<Search/>} />  
         <Route path="/saved" element={<SavedJokes/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
