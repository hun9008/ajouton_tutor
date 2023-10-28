<<<<<<< HEAD
import Login from './login';
import Submit from './submit'; // Submit 컴포넌트를 임포트
import './App.css';
import './submit.css';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './login';
import TutorApplication from './TutorApplication';
import MentorReport from './MentorReport';
import Header from './Header';
import SuccApply from './SuccApply';
import SuccJoin from './SuccJoin';
import LandgingPage from './LandingPage';
>>>>>>> 84cd41d596aab73f245df41754990733aefa5beb

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Login />
      <Submit />
=======
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<LandgingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/TutorApplication' element={<TutorApplication />} />
          <Route path='/MentorReport' element={<MentorReport />} />
          <Route path='/SuccApply' element={<SuccApply />} />
          <Route path='/SuccJoin' element={<SuccJoin />} />
        </Routes>
      </Router>
>>>>>>> 84cd41d596aab73f245df41754990733aefa5beb
    </div>
  );
}

export default App;
