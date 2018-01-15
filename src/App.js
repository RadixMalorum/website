import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './styles/App.css';
// import fontawesome from '@fortawesome/fontawesome';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import brands from '@fortawesome/fontawesome-free-brands';
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-pro-solid';
// fontawesome.library.add(brands, faCheckSquare, faCoffee);
import { Homepage, Header, Menu, CookiePolicy, PrivacyPolicy } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/cookie-policy" component={CookiePolicy} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
      </div>
    );
  }
}

export default App;
