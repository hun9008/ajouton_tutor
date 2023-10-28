<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
=======

import Login from './login';
import Submit from './submit'; // Submit 컴포넌트를 임포트
import './App.css';
import './submit.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Random from './Random';
>>>>>>> ee945761c82b6619ffa6ff88a4ab62a7593173a4
import TutorApplication from './TutorApplication';
import MentorReport from './MentorReport';
import Header from './Header';
import SuccApply from './SuccApply';
import SuccJoin from './SuccJoin';
import LandgingPage from './LandingPage';
<<<<<<< HEAD
import SubMit from './submit';

=======
>>>>>>> ee945761c82b6619ffa6ff88a4ab62a7593173a4

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
=======

>>>>>>> ee945761c82b6619ffa6ff88a4ab62a7593173a4
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<LandgingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/TutorApplication' element={<TutorApplication />} />
          <Route path='/MentorReport' element={<MentorReport />} />
          <Route path='/SuccApply' element={<SuccApply />} />
          <Route path='/SuccJoin' element={<SuccJoin />} />
<<<<<<< HEAD
          <Route path='/SubMit' element={<SubMit />} />
        </Routes>
      </Router>
=======
          <Route path='/Random' element={<Random />} />
          <Route path='/servey' element={<ServeyPage />} />
          <Route path='/submit' element={<Submit />} />
        </Routes>
      </Router>

>>>>>>> ee945761c82b6619ffa6ff88a4ab62a7593173a4
    </div>
  );
}

export default App;
