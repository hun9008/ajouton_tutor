import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import './App.css';
import TutorApplication from './TutorApplication';
import MentorReport from './MentorReport';

function App() {
  return (
    <div className="App">
      

      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/TutorApplication' element={<TutorApplication />} />
          <Route path='/MentorReport' element={<MentorReport />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



