import React from 'react'
import { Typography } from '@mui/material';

type Races = {
    name: string
}

const RaceList = (name: Races) => {
  return (
    <div>
        <Typography>{name.name}</Typography>
    </div>
  )
}

export default RaceList