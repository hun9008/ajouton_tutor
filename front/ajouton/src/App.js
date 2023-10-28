import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import './App.css';
import TutorApplication from './TutorApplication';
import MentorReport from './MentorReport';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />

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



