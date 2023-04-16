import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import TasksPage from './components/TasksPage';
// import Footer from './components/footer.jsx';
import Navbar from './components/NavBar';

function App() {
  
  return (
    <div class="wrapper">
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/form" element={<FormPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
