import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import "primereact/resources/themes/lara-light-blue/theme.css";

import Home from './pages/landing/Home';
import Courses from './pages/landing/Courses';
import Community from './pages/landing/Community';
import Login from './pages/landing/Login';
import Register from './pages/landing/Register';
import ForgotPassword from './pages/landing/ForgotPassword';
import ForgotPasswordToken from './pages/landing/ForgotPasswordToken';

import './App.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/forgotpasswordtoken" element={<ForgotPasswordToken />} />
      </Routes>
    </Router>
  );
}

export default App;
