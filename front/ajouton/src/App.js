import Login from './login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TutorApplication from './TutorApplication';
import MentorReport from './MentorReport';
import Header from './Header';
import SuccApply from './SuccApply';
import SuccJoin from './SuccJoin';
import LandgingPage from './LandingPage';
import Random from './Random';
import Submit from './submit';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<LandgingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/TutorApplication' element={<TutorApplication />} />
          <Route path='/MentorReport' element={<MentorReport />} />
          <Route path='/SuccApply' element={<SuccApply />} />
          <Route path='/SuccJoin' element={<SuccJoin />} />
          <Route path='/Random' element={<Random />} />
          <Route path='/submit' element={<Submit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
