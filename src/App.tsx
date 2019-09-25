import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Counter from './counter'
const App: React.FC = () => {
  return (
    <div className="">
      <header className="App-header">
        <div className="tb-width--172">
        <img src={logo} className="tb-image" alt="logo" />
        </div>
        <a
          className="tb-typo--h1"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Counter />
      </header>

    </div>
  );
}

export default App;
