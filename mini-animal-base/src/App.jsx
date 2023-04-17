import { useState } from 'react'
import data from '../animals.json';
console.log(data);
function cleanUpData(){
  return data.map((animal) => {
    const  [name, , trait, type] = animal.fullname.split(" ");
    return {
      name, 
      trait,
      type,
      age: animal.age,
    };
  });
}

import './App.css'

function App() {
const animals = cleanUpData();
console.log(animals);

  return (
    <div className="App">
      <h1>Mini Animal Base </h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Trait</td>
            <td>Type</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {
            animals.map((animal) => (
            <tr>
              <td>{animal.name}</td>
              <td>{animal.trait}</td>
              <td>{animal.type}</td>
              <td>{animal.age}</td>
            </tr>  
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App;
