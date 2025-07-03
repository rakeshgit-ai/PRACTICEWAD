import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setvalue] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        div  {value}
      </header>
    </div>
  );
}

export default App;
