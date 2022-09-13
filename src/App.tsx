import React from 'react';
import './App.css';
import { HairColor, Person } from './components/Person';

function App() {
  const name:string = "SHuhrat"
  const age: number = 20
  const isMarrid: boolean = false

  return (
    <div className="App">
      {name.toUpperCase()}

      <Person name='Temur' age={19} email='temurdev@gmail.com' hair={HairColor.Green}/>
    </div>
  );
}

export default App;
