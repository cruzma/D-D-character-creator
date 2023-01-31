import React, { useEffect, useState } from 'react';
import Races from './components/Races';
import './App.css';

function App() {

  type Race = {
    slug: string;
    name: string;
    desc: string;
    age: string;
    alignment: string;
    size: string;
    speed_desc: string;
    languages: string;
    vision: string;
    traits: string;
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

  return (
    <div className="App">
      
      {
        races.map((race) => 
          <Races key={race.slug} {...race}/>
        )
      }
      
    </div>
  );
}

export default App;
