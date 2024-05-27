import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './Pages/Home.page';
import EditPage from './Pages/Edit.page';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/edit' element={<EditPage />} />
  
      </Routes>
 
    </div>
  );
}

export default App;
