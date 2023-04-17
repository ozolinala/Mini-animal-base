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
const [filter, setFilter] = useState("")
console.log(animals);
let filteredAnimals = [...animals];

if(filter){
  filteredAnimals = filteredAnimals.filter(ani=>ani.type===filter)
}

  return (
    <div className="App">
      <h1>Mini Animal Base </h1>
      <button onClick={()=>setFilter("cat")}>Only Cats</button>
      <button onClick={()=>setFilter("dog")}>Only Dogs</button>
      <button onClick={()=>setFilter("dragon")}>Only Dragons</button>
      <button onClick={()=>setFilter("")}>All</button>
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
          {filteredAnimals.map((animal) => (
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
