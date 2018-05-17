import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './styles/App.css';

import { Homepage, Header, SideMenu, CookiePolicy, PrivacyPolicy } from './components';

class App extends Component {
  render() {
    return (
      <div id="app" className="App">
        <SideMenu />
        <div id="page-wrapper">
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route path="/cookie-policy" component={CookiePolicy} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </div>
      </div>
    );
  }
}

export default App;
