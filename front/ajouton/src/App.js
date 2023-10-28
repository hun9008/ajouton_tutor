import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import './App.css';
import TutorApplication from './TutorApplication';

function App() {
  return (
    <div className="App">
      

      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/TutorApplication' element={<TutorApplication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
