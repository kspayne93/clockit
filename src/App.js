import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
        < Header />
        { routes }
      </div>
    )
  }
}

// https://github.com/bethtelford/simulation-timeclock