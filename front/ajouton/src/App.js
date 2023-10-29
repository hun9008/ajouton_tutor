import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect } from 'react';


import './App.css';
import Login from './login';
import TutorApplication from './TutorApplication';
import MentorReport from './MentorReport';
import Header from './Header';
import SuccApply from './SuccApply';
import SuccJoin from './SuccJoin';
import LandgingPage from './LandingPage';
import Random from './Random';
import Submit from './Submit';

function ServeyPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const randomString = queryParams.get('randomString');

  console.log("Parsed randomString:", randomString);


  useEffect(() => {
    // 백엔드 서버로 랜덤 파라미터 변수 보내기
    axios.post('https://your-backend-server.com/api/save-random', {
      randomString: randomString
    })
    .then(response => {
      console.log("Random string saved successfully:", response.data);
    })
    .catch(error => {
      console.error("Error saving random string:", error);
    });
  }, [randomString]);


  return (
    <div>
      Received Random String: {randomString}
    </div>
  );
}

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
          <Route path='/servey' element={<ServeyPage />} />
          <Route path='/Submit' element={<Submit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
