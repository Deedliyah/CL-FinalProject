import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages';
import LoginPage from './pages/login';
import LearningApp from './pages/learningapp';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route path='/learningapp' component={LearningApp} exact />
      </Switch>
    </Router>
  );
}

export default App;
