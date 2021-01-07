import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages';
import LoginPage from './pages/login';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={LoginPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
