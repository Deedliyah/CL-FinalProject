import React from 'react';
import logo from './logo.svg';
import './assets/css/style.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/icofont/icofont.min.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/venobox/venobox.css'
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import './assets/vendor/aos/aos.css'
import LandingPage from './Layout/LandingPage'
import { HashRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;  
