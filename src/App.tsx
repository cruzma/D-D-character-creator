import React, { useEffect, useState } from 'react';
import Racecards from './components/RaceCards';
import './App.css';
import { Pagination, Box, Tabs, Tab } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab'
import RaceList from './components/raceList';

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
  const [value, setValue] = useState<number>(0)
  const [pageSize, setPageSize ] = useState<number>(1)


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

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setValue(value);
  };

  // const startIndex = (page - 1) * pageSize;
  // const endIndex = startIndex + pageSize;
  // const currentData = races.slice(startIndex, endIndex);

  return (
    <div className="App">
      <TabContext value = {`${value}`}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs onChange={handleChange} aria-label="basic tabs example" centered>
          {
            races.map((race, id) => 
              // <Racecards key={race.slug} {...race}/>
              <Tab label={race.name} value={`${id}`} key={race.slug}/>

            )
          }
          </Tabs>
        </Box>
        {
          races.map((race, id) => (
            <TabPanel value={`${id}`} key={race.slug}>
              <Racecards {...race}/>
            </TabPanel>
          )
          )
        }
      </TabContext>

      {/* <RaceList key={races.slug} name={races.name} /> */}
      {/* <Pagination 
        count={Math.ceil(races.length / pageSize)}
        page={page}
        onChange={handleChange}
      /> */}
      
    </div>
  );
}

export default App;
