import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header';




class App extends Component {
  
  render() {
    return (
    <Router>
        <Header/>
    </Router>
    );
  }
}

export default App;
