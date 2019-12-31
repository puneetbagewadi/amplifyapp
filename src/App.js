import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>AWS is AWeSome...</p>
        <a
          className='App-link'
          href='https://aws.amazon.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Go to AWS
        </a>
      </header>
    </div>
  );
}

export default App;
