import React from 'react';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="app">
      <div className={'background'}>
        <div className={'header-image'}>
            <div className={'header-image__overlay'} />
            <div className={'content-container'}>
                <Menu />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
