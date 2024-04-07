import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Body from './components/Body';

export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (


    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='App'>
        <Header handleDarkMode={setDarkMode} />
        <Body />
      </div>

    </div>
  )
}

