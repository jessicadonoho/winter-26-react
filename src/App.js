import logo from './logo.svg';
import './App.css';
import TestComponent from "./components/TestComponent";
import { useState } from 'react';

const Comp = () => {
  return <p>This is jdonoho</p>
}

function App() {
  const [count, setCount]=useState(0)


  return (
    <div className="App" id='root'>

      <header className="App-header">
        <button
          onClick={()=>setCount(count+1)}
        >
          Clicks: {count}
        </button>
        <Comp />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
