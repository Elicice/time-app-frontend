import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import HomePage from './HomePage';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Overview from './Overview';


function App() {
  return (
    <>
    <Router>
    <div className="App">
      <NavBar />
      <div className="App-content"> 
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="overview" element={<Overview />} />
      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
    </>
  );
}


export default App;
