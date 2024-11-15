// import logo from './logo.svg';
import './App.css';
// import './button.js';
import Card from './components/card.js';  // Make sure the path is correct
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; 
// function App() {
//   return (
//     <div>
      
//   </div>

// );
// }
// Import the Navbar component

// Example pages (You can replace with your actual components)
function HomePage() {
  return <div>Home (Project) Page</div>;
}

function LoginPage() {
  return <div>Login Page</div>;
}

function RegisterPage() {
  return <div>Register Page</div>;
}

function ContactPage() {
  return <div>Contact Page</div>;
}

function DashboardPage() {
  return <div>Dashboard Page</div>;
}

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar is placed outside Routes so it appears on all pages */}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;