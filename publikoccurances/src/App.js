import React, { Component } from 'react';
import store from './reducers/combineReducers';
import { Provider } from 'react-redux';
import NewsFeed from './Components/NewsFeed';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Provider store={store}>
          <NewsFeed>

          </NewsFeed>
        </Provider>
      </div>
    );
  }
}

export default App;
