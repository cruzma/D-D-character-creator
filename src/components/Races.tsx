import React from 'react'
import { Typography } from '@mui/material'


type RaceProps = {
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

const Races = ({slug, name, desc, age, alignment, size, speed_desc, languages, vision, traits}: RaceProps) => {

  return (
    <div>
      <Typography variant="h1">{name}</Typography>
      <Typography variant="body1">{desc}</Typography>
      <Typography variant='overline'>{age}</Typography>
      <Typography variant='h2'>{alignment}</Typography>
      <Typography variant='caption'>{size}</Typography>
      <Typography>{speed_desc}</Typography>
      <Typography variant='body1'>{languages}</Typography>
      <Typography variant='subtitle2'>{vision}</Typography>
      <Typography variant='subtitle1'>{traits}</Typography>

    </div>
  )
}

export default Races