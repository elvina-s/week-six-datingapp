import './App.css';
import React from 'react';
import { data } from './data';
import { useState } from 'react';

function App () {
  const [person, setPerson] = useState(0);
  const {id, name, description, age, image} = data[person];

  const previousPerson = () => {
    setPerson ((person => {
      person--;
      if (person < 0) {
        return data.length - 1;
      }
      return person;
    }))
  }

  const nextPerson = () => {
    setPerson ((person => {
      person++;
      if (person > data.length - 1) {
        return person = 0;
      }
      return person;
    }))

  }

  return (<div>
      <div>
        <img src={image} alt="photo" width="300px"></img>
      </div>
      <div>
        <h1>{id} - {name}</h1>
      </div>
      <div>
        <h2>{description}</h2>
      </div>
      <div>
        <h2>{age} years old</h2>
      </div>
      <div>
        <button onClick={previousPerson}>Previous</button>
      </div>
      <div>
        <button onClick={nextPerson}>Next</button>
      </div>
    </div>
  )
}

export default App;
