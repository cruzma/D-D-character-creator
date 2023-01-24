import React, { useEffect } from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  interface Race {
    slug: string;
    name: string;
  }

  interface RaceResults{
    results: Race[];
  }

  const [races, setRaces] = useState<Race[]>([])

  useEffect(() => {  
    const races = async() => {
      try{
        const response = await fetch('https://api.open5e.com/races/')
        const data: RaceResults = await response.json()
        setRaces(data.results)
        
      } catch (err){
          console.log(err)
      }

  }
    races()
  }, [])


  // console.log(race.name)
  return (
    <div className="App">
      {races.map((race) => 
        <div key={race.slug}> {race.name} </div>
      )
      }
      
    </div>
  );
}

export default App;
